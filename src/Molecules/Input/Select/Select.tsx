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

const StyledRelativeDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  ({ children, noFormField, open, ...props }, ref) => (
    <StyledRelativeDiv {...(noFormField ? { ref } : {})}>
      <Flexbox container alignItems="center">
        {noFormField ? (
          children
        ) : (
          <FormField {...props} ref={ref}>
            {children}
            <Chevron open={open} />
          </FormField>
        )}
      </Flexbox>
    </StyledRelativeDiv>
  ),
);

const Select = props => {
  const {
    placeholder,
    value: valueFromProps,
    onChange: onChangeFromProps,
    options,
    components,
    noFormField,
    reducer = defaultSelectReducer,
    initialState = defaultSelectInitialState,
    disabled,
  } = props;

  const isControlledMode = typeof valueFromProps !== 'undefined';
  const [_state, dispatch] = React.useReducer(reducer, initialState);
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
    [_state, options, placeholder, isControlledMode, valueFromProps, _state.value],
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
    if (itemsRefs.length > 0 && itemsRefs.every(i => Boolean(i))) {
      itemsRefs[0].focus();
    }
  }, [open]);

  const inputWrapperRef = React.useRef<HTMLDivElement>();
  useOnClickOutside([customSelectListRef, inputWrapperRef], () =>
    dispatch({ type: defaultActionTypes['Select.Close'] }),
  );

  const handleClickListItem = ({ selected, option }, e) => {
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
  React.useEffect(() => () => console.log('Select unmount'), []);

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
