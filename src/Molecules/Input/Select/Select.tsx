import React from 'react';
import styled from 'styled-components';
import { Icon, Flexbox } from '../../..';
import { FormField } from '../FormField';

import { usePrevious, useOnClickOutside } from '../../../common/Hooks';
import { useKeyboardNavigation } from './useKeyboardNavigation';

import { noop, createCounter } from './utils';

import { ListItemWrapper, ListWrapper, SelectedValueWrapper } from './wrappers';
import { useSelectReducer, SelectStateContext } from './context';
import {
  useComponentsWithDefaults,
  defaultComponents,
  defaultActionTypes,
  defaultSelectReducer,
  defaultSelectInitialState,
} from './defaults';
import { Props, Option } from './Select.types';

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

const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  ({ children, noFormField, open, onFocus, onBlur, fullWidth, ...props }, ref) => (
    <StyledRelativeDiv
      {...(noFormField ? { ref } : {})}
      onBlur={onBlur}
      onFocus={onFocus}
      fullWidth={fullWidth}
    >
      <Flexbox container alignItems="center" {...(fullWidth ? { width: '100%' } : {})}>
        {noFormField ? (
          children
        ) : (
          <FormField {...props} ref={ref} fullWidth={fullWidth}>
            {children}
            <Chevron open={open} />
          </FormField>
        )}
      </Flexbox>
    </StyledRelativeDiv>
  ),
);
FormFieldOrFragment.displayName = 'FormFieldOrFragment';
const Select = (props: Props) => {
  const {
    placeholder,
    value: valueFromProps,
    onChange: onChangeFromProps,
    onFocus,
    onBlur,
    options,
    components,
    noFormField,
    reducer = defaultSelectReducer,
    initialState = defaultSelectInitialState,
    disabled,
    autoFocusFirstOption = true,
    fullWidth,
  } = props;

  const isControlledMode = typeof valueFromProps !== 'undefined';
  const [_state, dispatch] = React.useReducer(
    reducer as typeof defaultSelectReducer,
    initialState as typeof defaultSelectInitialState,
  );
  const previousState = usePrevious(_state);
  const { ListItem, List, SelectedValue } = useComponentsWithDefaults(components);

  const stateValueHasChanged = previousState && !Object.is(previousState.value, _state.value);
  const valueUpdatedInControlledMode =
    isControlledMode && stateValueHasChanged && _state.value !== valueFromProps;
  const valueUpdatedInUncontrolledMode = !isControlledMode && previousState && stateValueHasChanged;

  if (onChangeFromProps && (valueUpdatedInUncontrolledMode || valueUpdatedInControlledMode)) {
    onChangeFromProps(_state.value);
  }

  // Adjusting state for possible
  // changes from props
  const state = React.useMemo(
    () =>
      reducer(_state, {
        type: defaultActionTypes['Select.SyncState'],
        payload: {
          options,
          placeholder,
          value: isControlledMode ? valueFromProps : _state.value,
        },
      }),
    [_state, options, placeholder, isControlledMode, valueFromProps, reducer],
  );

  const { open, value } = state;

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const customSelectListRef = React.useRef<HTMLDivElement>(null);

  const { setRef, onKeyDown: handleListItemKeyDown, itemsRefs } = useKeyboardNavigation({
    itemsLength: options.filter(x => !x.disabled).length,
    onEscape: () => {
      dispatch({ type: defaultActionTypes['Select.Close'] });
      if (buttonRef.current) {
        buttonRef.current.focus();
      }
    },
  });

  React.useLayoutEffect(() => {
    if (autoFocusFirstOption) {
      if (itemsRefs.length > 0 && itemsRefs.every(i => Boolean(i))) {
        itemsRefs[0].focus();
      }
    }
  }, [open, autoFocusFirstOption, itemsRefs]);

  const inputWrapperRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside([customSelectListRef, inputWrapperRef], () =>
    dispatch({ type: defaultActionTypes['Select.Close'] }),
  );

  const handleClickListItem = (
    { selected, option }: { selected: boolean; option: Option },
    e: React.MouseEvent,
  ) => {
    const action = {
      type: selected
        ? defaultActionTypes['Select.DeselectValue']
        : defaultActionTypes['Select.SelectValue'],
      payload: option,
    };

    dispatch(action);
    e.preventDefault();
  };

  const counter = createCounter();
  // Not using isFocused in state, hence ref
  const isFocused = React.useRef(false);

  const handleBlur = (e: React.FocusEvent) => {
    if (!onBlur) return;
    if (
      inputWrapperRef.current &&
      !inputWrapperRef.current.contains((e.relatedTarget as unknown) as Node)
    ) {
      onBlur(e);
      isFocused.current = false;
    }
  };
  const handleFocus = (e: React.FocusEvent) => {
    if (!onFocus) return;
    if (inputWrapperRef.current && inputWrapperRef.current.contains(document.activeElement)) {
      if (!isFocused.current) {
        onFocus(e);
        isFocused.current = true;
      }
    }
  };

  if (!state.initialized) {
    return null;
  }

  return (
    <SelectStateContext.Provider value={[state, dispatch]}>
      <FormFieldOrFragment
        noFormField={noFormField}
        {...props}
        ref={inputWrapperRef}
        disabled={disabled}
        open={open}
        onFocus={handleFocus}
        onBlur={handleBlur}
        fullWidth={fullWidth}
      >
        <SelectedValueWrapper
          state={state}
          ref={buttonRef}
          open={open}
          disabled={disabled}
          noFormField={noFormField}
          placeholder={placeholder}
          dispatch={dispatch}
          component={SelectedValue}
          options={options}
        />
        {open && (
          <ListWrapper ref={customSelectListRef} key={3} component={List} noFormField={noFormField}>
            {options.map((x: any, index: number) => (
              <ListItemWrapper
                key={x.value}
                aria-selected={value.includes(x)}
                index={index}
                onKeyDown={handleListItemKeyDown}
                ref={x.disabled ? noop : setRef(counter.next().value)}
                option={x}
                selected={value.includes(x)}
                onClick={handleClickListItem}
                component={ListItem}
              />
            ))}
          </ListWrapper>
        )}
      </FormFieldOrFragment>
    </SelectStateContext.Provider>
  );
};

const defaults = {
  actionTypes: defaultActionTypes,
  reducer: defaultSelectReducer,
  initialState: defaultSelectInitialState,
  components: defaultComponents,
};

Select.useSelectReducer = useSelectReducer;

Select.defaults = defaults;

export { Select };
