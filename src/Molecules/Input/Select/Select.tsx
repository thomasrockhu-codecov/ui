import React from 'react';
import { useMachine } from '@xstate/react';
import styled, { css } from 'styled-components';
import { Icon, Flexbox, FormField } from '../../..';

import { useOnClickOutside } from '../../../common/Hooks';

import { noop } from './utils';

import { ListItemWrapper, ListWrapper, SelectedValueWrapper } from './wrappers';
import { useSelectReducer, SelectStateContext } from './context';
import { useComponentsWithDefaults, defaultComponents, defaultActionTypes } from './defaults';
import { SelectMachine } from './machine';
import { searchMachine } from './searchMachine';
import { Props } from './Select.types';

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

// const HiddenSelect = styled.select`
//   display: none;
// `;

const Select = (props: Props) => {
  const {
    placeholder,
    value: valueFromProps,
    onChange: onChangeFromProps,
    onFocus,
    label,
    onBlur,
    size,
    options,
    components,
    noFormField,
    reducer,
    initialState,
    disabled,
    autoFocusFirstOption = true,
    fullWidth,
    id,
  } = props;

  const isFirstRender = React.useRef(true);
  const machineHandlers = useMachine(
    SelectMachine.withContext({
      error: props.error,
      success: props.success,
      options,
      selectedItems: props.value || [],
      disabled,
      open: false,
      itemFocusIdx: null,
      placeholder,
      searchQuery: '',
      extraInfo: props.extraInfo,
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

  const [searchMachineState, searchMachineSend] = useMachine(searchMachine);

  React.useEffect(() => {
    send({
      type: 'SYNC',
      payload: {
        options: props.options,
        placeholder,
        error: props.error,
        selectedItems: props.value || [],
        success: props.success,
        disabled: props.disabled,
        extraInfo: props.extraInfo,
      },
    });
  }, [
    props.options,
    send,
    placeholder,
    props.error,
    props.success,
    props.disabled,
    props.extraInfo,
    props.value,
  ]);

  React.useEffect(() => {
    if (searchMachineState.matches('search')) {
      searchMachineSend({ type: 'SEARCHED' });
      send({ type: 'SEARCH', payload: searchMachineState.context.searchQuery });
    }
  }, [searchMachineState]);

  const handleClickListItem = option => () => {
    const isSelected = current.context.selectedItems.includes(option);
    const type = isSelected ? 'DESELECT_ITEM' : 'SELECT_ITEM';
    send({ type, payload: option });
  };

  let accumulatedArrowActions = React.useRef([]);
  let currentFrameId = React.useRef(null);
  let currentTimeoutId = React.useRef(null);

  const sendBatched = actionType => {
    accumulatedArrowActions.current.push({ type: actionType });
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
    if (e.key === 'ArrowDown') {
      sendBatched('FOCUS_NEXT_ITEM');
      e.preventDefault();
      return false;
    }
    if (e.key === 'ArrowUp') {
      sendBatched('FOCUS_PREV_ITEM');
      e.preventDefault();
      return false;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      send({ type: 'BLUR' });
      return false;
    }
    if (e.key === ' ') {
      send({ type: 'SELECT_FOCUSED_ITEM' });
      e.preventDefault();
      return false;
    }
    if (e.key === 'Enter') {
      send({ type: 'SELECT_FOCUSED_ITEM' });
      e.preventDefault();
      return false;
    }
    e.preventDefault();
    searchMachineSend({ type: 'CHANGE', payload: e.key });
    return false;
  };
  const isOpen = current.matches({ open: 'on' });

  const buttonRef = React.useRef(null);
  const itemRefs = React.useMemo(() => [], []);
  const listRef = React.useRef(null);
  const formFieldRef = React.useRef(null);

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

  const { ListItem, List, SelectedValue } = useComponentsWithDefaults(components);

  useOnClickOutside([listRef, formFieldRef], () => send({ type: 'BLUR' }));

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
      {/* <HiddenSelect name={props.name} disabled={props.disabled}>
        {props.placeholder && (
          <option
            label={props.placeholder}
            value=""
            {...(value.length === 0 ? { selected: true } : {})}
          />
        )}
        {props.options.map(x => (
          <option
            label={x.label}
            value={x.value}
            {...(value.includes(x) ? { selected: true } : {})}
          />
        ))}
      </HiddenSelect> */}
      <SelectStateContext.Provider value={machineHandlers}>
        <FormFieldOrFragment
          label={label}
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
            label={label}
            disabled={isDisabled}
            noFormField={noFormField}
            placeholder={placeholder}
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
              ref={listRef}
            >
              {options.map((x: any, index: number) => (
                <ListItemWrapper
                  key={x.value}
                  index={index}
                  ref={setItemRef(index)}
                  option={x}
                  onClick={x.disabled ? noop : handleClickListItem(x)}
                  component={ListItem as any}
                />
              ))}
            </ListWrapper>
          )}
        </FormFieldOrFragment>
      </SelectStateContext.Provider>
    </>
  );
};

Select.useSelectReducer = useSelectReducer;

export { Select };
