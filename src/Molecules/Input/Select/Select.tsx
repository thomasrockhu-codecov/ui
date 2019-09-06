import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Typography, Icon, Flexbox, VisuallyHidden } from '../../..';
import { FormField } from '../FormField';

import NormalizedElements from '../../../common/NormalizedElements';
import { usePrevious, useOnClickOutside } from '../../../common/Hooks';
import { useKeyboardNavigation } from './useKeyboardNavigation';

import { noop, createCounter } from './utils';
import { Option } from './Select.types';

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

const StyledA11yButton = styled(NormalizedElements.Button)`
  background: ${p => (p.disabled ? p.theme.color.disabledBackground : 'transparent')};
  width: 100%;
  height: 100%;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  border: 0;

  ${p =>
    !p.absolutePositioning
      ? ''
      : `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  outline: 0;

  padding: 0;
  text-align: initial;
  `}
`;

const StyledRelativeDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  ({ children, noFormField, ...props }, ref) => (
    <StyledRelativeDiv {...(noFormField ? { ref } : {})}>
      <Flexbox container alignItems="center">
        {noFormField ? (
          children
        ) : (
          <FormField {...props} ref={ref}>
            {children}
          </FormField>
        )}
      </Flexbox>
    </StyledRelativeDiv>
  ),
);

const SelectedValueWrapper = React.forwardRef<any, any>(
  ({ placeholder, dispatch, open, component: Component, state, noFormField, disabled }, ref) => {
    const screenReaderText =
      state.value.length === 1
        ? R.pathOr('', [0, 'label'], state.value)
        : `${state.value.length} items`;

    const handleClick = React.useCallback(
      () => dispatch({ type: defaultActionTypes['Select.Toggle'] }),
      [dispatch],
    );
    return (
      <Flexbox container direction="column" justifyContent="center">
        <Typography type="secondary">
          <StyledA11yButton
            absolutePositioning={!noFormField}
            ref={ref}
            aria-haspopup="listbox"
            aria-expanded={open ? 'true' : 'false'}
            onClick={handleClick}
            disabled={disabled}
            tabIndex={0}
          >
            <div style={{ flex: 1 }} aria-hidden="true">
              <Component />
            </div>
          </StyledA11yButton>
          <VisuallyHidden>{placeholder}</VisuallyHidden>
          {state.value.length > 0 && <VisuallyHidden>{screenReaderText}</VisuallyHidden>}
        </Typography>
      </Flexbox>
    );
  },
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

  const valueUpdatedInControlledMode = isControlledMode && _state.value !== valueFromProps;
  const valueUpdatedInUncontrolledMode =
    !isControlledMode && previousState && !Object.is(previousState.value, _state.value);

  if (onChangeFromProps && (valueUpdatedInUncontrolledMode || valueUpdatedInControlledMode)) {
    onChangeFromProps(_state.value);
  }

  // Adjusting state for possible
  // changes from props
  const state = React.useMemo(
    () =>
      reducer(state, {
        type: defaultActionTypes['Select.SyncState'],
        payload: {
          options,
          placeholder,
          value: isControlledMode ? valueFromProps : state.value,
        },
      }),
    [_state, options, placeholder, isControlledMode, valueFromProps, _state.value],
  );

  const { open, value } = state;

  const buttonRef = React.useRef<HTMLButtonElement>();
  const customSelectListRef = React.useRef();

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

  const inputWrapperRef = React.useRef();
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
        {!noFormField && <Chevron open={open} />}
        {open && (
          <ListWrapper ref={customSelectListRef} key={3} component={List} noFormField={noFormField}>
            {options.map((x, index) => (
              <ListItemWrapper
                key={x.value}
                aria-selected={value.includes(x)}
                role="option"
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

const StyledListWrapper = styled.div`
  width: ${p => (p.noFormField ? 'auto' : '100%')};
  height: 100%;
  position: absolute;
  top: 100%;
  z-index: 1;
`;

const ListWrapper = React.forwardRef<HTMLDivElement>(
  ({ component: Component, children, noFormField }, ref) => {
    return (
      <StyledListWrapper ref={ref} noFormField={noFormField}>
        <Component position={noFormField ? 'left' : 'right'}>{children}</Component>
      </StyledListWrapper>
    );
  },
);

const StyledListItemWrapper = styled.li`
  width: 100%;
  height: 100%;
`;

type ListItemComponent = React.ComponentType<
  Option & { selected: boolean } & { ref: React.Ref<HTMLElement> }
>;

const ListItemWrapper = React.forwardRef<
  HTMLElement | null,
  {
    component: ListItemComponent;
    option: Option;
    index: number;
    onKeyDown: React.KeyboardEventHandler;
    selected: boolean;
    onClick: (params: { selected: boolean; option: Option }, e: React.MouseEvent) => void;
  }
>((props, outerRef) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const innerRef = React.useRef<HTMLElement>(null);
  const handleFocus = React.useCallback(() => innerRef.current && innerRef.current!.focus(), []);
  const handleBlur = React.useCallback(() => innerRef.current && innerRef.current!.blur(), []);
  const handleClick = React.useCallback(
    e => props.onClick({ selected: props.selected, option: props.option }, e),
    [props.onClick, props.option, props.selected], // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Passing ref through to the Component
  React.useImperativeHandle(outerRef, () => innerRef.current);

  const Component = props.component;
  return (
    <StyledListItemWrapper
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={props.onKeyDown}
      onClick={handleClick}
    >
      <Component ref={innerRef} index={props.index} />
    </StyledListItemWrapper>
  );
});

const defaults = {
  actionTypes: defaultActionTypes,
  reducer: defaultSelectReducer,
  initialState: defaultSelectInitialState,
  components: defaultComponents,
};

Select.useSelectReducer = useSelectReducer;

Select.defaults = defaults;

export { Select };
