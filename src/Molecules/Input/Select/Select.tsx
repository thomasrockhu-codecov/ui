import React from 'react';
import { useMachine } from '@xstate/react';
import styled, { css } from 'styled-components';
import { Icon, Flexbox, FormField } from '../../..';

import { useOnClickOutside } from '../../../common/Hooks';

import { noop } from './utils';

import { ListItemWrapper, ListWrapper, SelectedValueWrapper } from './wrappers';
import { useSelectMachineFromContext, SelectStateContext } from './context';
import { useComponentsWithDefaults } from './defaults';
import { SelectMachine } from './machine';
import { searchMachine } from './searchMachine';
import { Props } from './Select.types';

import { assert } from '../../../common/utils';

const HiddenSelect = styled.select`
  display: none;
`;
const keyActionMap = {
  ArrowDown: 'FOCUS_NEXT_ITEM',
  ArrowUp: 'FOCUS_PREV_ITEM',
  Tab: 'BLUR',
  Escape: 'BLUR',
  ' ': 'SELECT_FOCUSED_ITEM',
  Enter: 'SELECT_FOCUSED_ITEM',
};
keyActionMap.keys = Object.keys(keyActionMap);

const Chevron = styled(Icon.ChevronDown)<{ open: boolean }>`
  transform: translateY(-50%) ${p => (p.open ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
  position: absolute;
  height: ${p => p.theme.spacing.unit(2)}px;
  top: 50%;
  right: ${p => p.theme.spacing.unit(1)}px;
  pointer-events: none;
`;

const StyledRelativeDiv = styled.div<any>`
  position: relative;
  display: inline-block;
  width: ${p => (p.fullWidth ? '100%' : 'initial')};
`;

const height = css<Pick<Props, 'size'>>`
  height: ${p => (p.size === 's' ? p.theme.spacing.unit(8) : p.theme.spacing.unit(10))}px;
`;

const hoverBorderStyles = css<Pick<Props, 'disabled'>>`
  ${p =>
    p.disabled
      ? ''
      : `
      &:hover {
        border-color: ${p.theme.color.inputBorderHover};
      }
`}
`;

const focusBorderStyles = css`
  &:focus-within {
    border-color: ${p => p.theme.color.borderActive};
  }
  &.focus-within {
    border-color: ${p => p.theme.color.borderActive};
  }
`;
const hasError = (error?: Props['error']) => error && error !== '';
const borderStyles = css<Pick<Props, 'error' | 'success'>>`
  outline: none;
  border: 1px solid
    ${p => {
      if (hasError(p.error)) return p.theme.color.inputBorderError;
      if (p.success) return p.theme.color.inputBorderSuccess;
      return p.theme.color.inputBorder;
    }};
  position: relative;
  ${hoverBorderStyles}
  ${focusBorderStyles}
`;

const SelectWrapper = styled.div`
  ${height}
  ${borderStyles}
  position:relative;
`;
const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  ({ children, noFormField, open, onFocus, onBlur, fullWidth, id, size, ...props }, ref) => (
    <StyledRelativeDiv {...(noFormField ? { ref } : {})} fullWidth={fullWidth}>
      <Flexbox
        {...(noFormField ? { onBlur, onFocus } : {})}
        container
        alignItems="center"
        {...(fullWidth ? { width: '100%' } : {})}
      >
        {noFormField ? (
          children
        ) : (
          <FormField
            id={`label-for-${id}`}
            fieldId={id}
            {...props}
            {...(fullWidth ? { width: '100%' } : {})}
            ref={ref}
          >
            <SelectWrapper onBlur={onBlur} onFocus={onFocus} size={size} {...props}>
              {children}
              <Chevron open={open} />
            </SelectWrapper>
          </FormField>
        )}
      </Flexbox>
    </StyledRelativeDiv>
  ),
);
FormFieldOrFragment.displayName = 'FormFieldOrFragment';

const useAutofocus = (ref: React.RefObject<any>, enable: boolean) => {
  React.useEffect(() => {
    if (enable && ref && ref.current) ref.current.focus();
  }, [enable]);
};
const useDebounce = (fn, ms) => {
  const timeoutId = React.useRef(null);
  return (...args) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => fn(...args), ms);
  };
};
const useRequestAnimationFrame = fn => {
  const frameId = React.useRef(null);
  return (...args) => {
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
    }
    frameId.current = requestAnimationFrame(() => fn(...args));
  };
};

const Select = (props: Props) => {
  // Todo remove the whole destructuting
  const { size, options, components, noFormField, disabled, fullWidth, id } = props;

  assert(Boolean(props.id), 'Input.Select: Provide an id.');
  const isFirstRender = React.useRef(true);
  const machineHandlers = useMachine(
    SelectMachine.withContext({
      label: props.label,
      error: props.error,
      success: props.success,
      options,
      selectedItems: props.value || [],
      disabled,
      open: false,
      itemFocusIdx: null,
      placeholder: props.placeholder,
      searchQuery: '',
      extraInfo: props.extraInfo,
      multiselect: props.multiselect || false,
      lastNavigationType: null,
    }),
  );
  const [current, send] = machineHandlers;

  React.useEffect(() => {
    if (isFirstRender.current) return;
    if (current.matches({ selection: 'changeUncommitted' })) {
      if (props.onChange) props.onChange(current.context.selectedItems);
      send('CHANGE_COMMIT');
    }
  }, [current, props.onChange]);

  console.log('navtype:', current.context.lastNavigationType);
  const [searchMachineState, searchMachineSend] = useMachine(searchMachine);

  React.useEffect(() => {
    send({
      type: 'SYNC',
      payload: {
        label: props.label,
        options: props.options,
        placeholder: props.placeholder,
        error: props.error,
        selectedItems: props.value || [],
        success: props.success,
        disabled: props.disabled,
        extraInfo: props.extraInfo,
        multiselect: props.multiselect,
      },
    });
  }, [
    props.label,
    props.options,
    send,
    props.placeholder,
    props.error,
    props.success,
    props.disabled,
    props.extraInfo,
    props.value,
    props.multiselect,
  ]);

  React.useEffect(() => {
    if (searchMachineState.matches('search')) {
      searchMachineSend({ type: 'SEARCHED' });
      send({ type: 'SEARCH', payload: searchMachineState.context.searchQuery });
    }
  }, [searchMachineState]);

  const handleClickListItem = option => e => {
    const isSelected = current.context.selectedItems.includes(option);
    const type = isSelected ? 'DESELECT_ITEM' : 'SELECT_ITEM';
    e.preventDefault();
    send({ type, payload: option });
    return false;
  };

  let accumulatedArrowActions = React.useRef([]);
  let currentFrameId = React.useRef(null);
  let currentTimeoutId = React.useRef(null);

  const sendBatched = actionTypes => {
    accumulatedArrowActions.current.push(...actionTypes);
    if (currentTimeoutId.current) clearTimeout(currentTimeoutId.current);
    currentTimeoutId.current = setTimeout(() => {
      currentTimeoutId.current = null;
      // Sending array of actions enables batching
      const actions = [...accumulatedArrowActions.current];
      accumulatedArrowActions.current = [];
      send(actions);
    }, 0);
  };

  const handleKeyDown = e => {
    if (keyActionMap.keys.includes(e.key)) {
      sendBatched(['KEY_PRESS', keyActionMap[e.key]]);
      e.preventDefault();
      return false;
    }
    searchMachineSend({ type: 'CHANGE', payload: e.key });
    send(['KEY_PRESS']);
  };

  const isOpen = current.matches({ open: 'on' });

  const buttonRef = React.useRef(null);
  const itemRefs = React.useMemo(() => [], []);
  const listRef = React.useRef(null);
  const formFieldRef = React.useRef(null);

  useAutofocus(buttonRef, props.autoFocus);

  const isKeyboardNavigation = current.matches('interaction.enabled.active.navigation.keyboard');
  const handleMouseMove = () => {
    if (isKeyboardNavigation) {
      send('MOUSE_MOVE');
    }
  };
  React.useLayoutEffect(() => {
    if (isOpen) {
      send({ type: 'FOCUS' });
    } else if (!isFirstRender.current) {
      buttonRef.current.focus();
    }
  }, [isOpen]);

  const setItemRef = index => ref => {
    if (ref) itemRefs[index] = ref;
  };

  React.useEffect(() => {
    if (current.matches('interaction.enabled.active.focus.listItem.anyItemFocused')) {
      itemRefs[current.context.itemFocusIdx].focus();
    }
  }, [current]);

  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const { ListItem, List, SelectedValue } = useComponentsWithDefaults(components, {
    multiselect: current.context.multiselect,
  });

  useOnClickOutside([listRef, formFieldRef], () => send({ type: 'BLUR' }));

  // const handleMouseHover = useRequestAnimationFrame(newIdx =>
  //   send({ type: 'ITEM_HOVERED', payload: newIdx }),
  // );
  // const counter = createCounter();
  // Not using isFocused in state, hence ref
  // const isFocused = React.useRef(false);

  const isDisabled = current.matches('interaction.disabled');
  const hasError = current.matches('correctness.error');
  const error = current.context.error;
  const success = current.context.success;
  const extraInfo = current.context.extraInfo;
  return (
    <>
      <HiddenSelect name={props.name} disabled={current.context.disabled} aria-hidden="true">
        {current.context.placeholder && (
          <option
            label={current.context.placeholder}
            value=""
            {...(current.context.selectedItems.length === 0 ? { selected: true } : {})}
          />
        )}
        {current.context.options.map(x => (
          <option
            label={x.label}
            value={x.value}
            {...(current.context.selectedItems.includes(x) ? { selected: true } : {})}
          />
        ))}
      </HiddenSelect>
      <SelectStateContext.Provider value={machineHandlers}>
        <FormFieldOrFragment
          label={current.context.label}
          noFormField={noFormField}
          ref={formFieldRef}
          disabled={isDisabled}
          open={isOpen}
          fullWidth={fullWidth}
          error={error}
          success={success}
          extraInfo={extraInfo}
          id={id}
          size={size}
        >
          <SelectedValueWrapper
            ref={buttonRef}
            open={isOpen}
            label={current.context.label}
            disabled={isDisabled}
            noFormField={noFormField}
            placeholder={current.context.placeholder}
            component={SelectedValue}
            options={options}
            state={current}
            id={id}
          />
          {isOpen && (
            <ListWrapper
              component={List}
              noFormField={noFormField}
              onKeyDown={handleKeyDown}
              onMouseMove={handleMouseMove}
              ref={listRef}
            >
              {options.map((x: any, index: number) => (
                <ListItemWrapper
                  key={x.value}
                  isKeyboardNavigation={isKeyboardNavigation}
                  index={index}
                  ref={setItemRef(index)}
                  option={x}
                  onClick={x.disabled ? noop : handleClickListItem(x)}
                  component={ListItem as any}
                  // onMouseEnter={handleMouseHover}
                />
              ))}
            </ListWrapper>
          )}
        </FormFieldOrFragment>
      </SelectStateContext.Provider>
    </>
  );
};

Select.useSelectMachineFromContext = useSelectMachineFromContext;

export { Select };
