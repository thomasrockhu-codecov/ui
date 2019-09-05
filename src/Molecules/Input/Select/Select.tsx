import React from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Typography, Icon, Flexbox, VisuallyHidden, Box } from '../../..';
import { FormField } from '../FormField';

import {
  List as DefaultList,
  ListItem as DefaultListItem,
} from './SingleSelectList/SingleSelectList';

import NormalizedElements from '../../../common/NormalizedElements';
import { usePrevious, useOnClickOutside } from '../../../common/Hooks';
import { useKeyboardNavigation } from './useKeyboardNavigation';

import { noop, createCounter } from './utils';
import { Option, OptionBase, SelectState } from './Select.types';

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

// FIXME
// Need to upgrade to ts@3.5+
// Then it can be written as
// ActionTypes = {} as const
const ActionTypes = {
  'Select.Open': 'Select.Open' as 'Select.Open',
  'Select.Close': 'Select.Close' as 'Select.Close',
  'Select.Toggle': 'Select.Toggle' as 'Select.Toggle',
  'Select.SelectValue': 'Select.SelectValue' as 'Select.SelectValue',
  'Select.DeselectValue': 'Select.DeselectValue' as 'Select.DeselectValue',
  'Select.Init': 'Select.Init' as 'Select.Init',
};

type ActionTypes = keyof typeof ActionTypes;
type Action = { type: ActionTypes; payload?: any };

const defaultSelectInitialState: SelectState = {
  open: false,
  value: [],
  options: [],
  placeholder: '',
  initialized: false,
};

const defaultSelectReducer = (state: SelectState, action: Action): SelectState => {
  switch (action.type) {
    case ActionTypes['Select.Open']:
      return { ...state, open: true };

    case ActionTypes['Select.Toggle']:
      return { ...state, open: !state.open };

    case ActionTypes['Select.Close']:
      return { ...state, open: false };

    case ActionTypes['Select.SelectValue']:
      return { ...state, open: false, value: [action.payload] };

    case ActionTypes['Select.Init']:
      return { ...state, ...action.payload, initialized: true };

    default:
      return state;
  }
};

const getLabelOrPlaceholder = <T extends OptionBase>({
  value,
  placeholder,
}: {
  options: T[];
  value: any[];
  placeholder: React.ReactNode;
}) => {
  if (value.length === 0) return placeholder;

  const selectedOptionLabel = R.pathOr('', [0, 'label'], value);
  return selectedOptionLabel;
};

const SelectStateContext = React.createContext<[React.Reducer<any, any>, any] | null>(null);

const useSelectReducer = () => {
  const [state, dispatch] = React.useContext(SelectStateContext)!;
  return [state, dispatch];
};

const FormFieldOrFragment = React.forwardRef<HTMLDivElement, any>(
  ({ children, noFormField, ...props }, ref) => (
    <div
      {...(noFormField ? { ref } : {})}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <Flexbox container alignItems="center">
        {noFormField ? (
          children
        ) : (
          <FormField {...props} ref={ref}>
            {children}
          </FormField>
        )}
      </Flexbox>
    </div>
  ),
);

const defaultComponents = {
  ListItem: React.forwardRef<HTMLDivElement, { index: number }>(({ index }, ref) => {
    const [state] = useSelectReducer();
    const option = state.options[index];
    const selected = state.value.includes(option);

    return (
      <DefaultListItem
        ref={ref}
        selected={selected}
        disabled={option.disabled}
        label={option.label}
        value={option.value}
      />
    );
  }),
  List: DefaultList,
  SelectedValue: () => {
    const [state] = useSelectReducer();
    return <Box px={2}>{getLabelOrPlaceholder(state)}</Box>;
  },
};

function SelectStateProvider<S extends {}, A extends {}>({
  children,
  value = [],
}: {
  children: React.ReactNode;
  value?: [React.Reducer<S, A>?, S?];
}) {
  const [reducer = defaultSelectReducer, initialState = defaultSelectInitialState] = value;
  return (
    <SelectStateContext.Provider value={React.useReducer(reducer, initialState) as any}>
      {children}
    </SelectStateContext.Provider>
  );
}

// type SelectedValueComponent = React.ComponentType<
//   { selected: boolean } & { ref: React.Ref<HTMLElement> }
// >;
const SelectedValueWrapper = React.forwardRef<any, any>(
  ({ placeholder, dispatch, open, component: Component, state, noFormField, disabled }, ref) => {
    const screenReaderText =
      state.value.length === 1
        ? R.pathOr('', [0, 'label'], state.value)
        : `${state.value.length} items`;

    const handleClick = React.useCallback(() => dispatch({ type: ActionTypes['Select.Toggle'] }), [
      dispatch,
    ]);
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

const useComponentsWithDefaults = (components: any = {}) => {
  return React.useMemo(
    () =>
      // @ts-ignore
      R.pipe(
        // @ts-ignore
        R.map(React.forwardRef),
        R.mergeRight(defaultComponents),
      )(components),
    [components],
  );
};

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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Using useMemo for synchronous setting initial state
  // FIXME: is there a better way?
  React.useMemo(() => {
    dispatch({
      type: ActionTypes['Select.Init'],
      payload: {
        options,
        placeholder,
        ...(Array.isArray(valueFromProps) ? { valueFromProps } : {}),
      },
    });
  }, [options, placeholder, dispatch, valueFromProps]);

  const previousState = usePrevious(state);

  React.useEffect(() => {
    if (previousState) {
      if (onChangeFromProps && !Object.is(previousState.value, state.value)) {
        onChangeFromProps(state.value);
      }
    }
  }, [state, onChangeFromProps]); // eslint-disable-line react-hooks/exhaustive-deps

  const { ListItem, List, SelectedValue } = useComponentsWithDefaults(components);
  const { open, value } = state;

  const buttonRef = React.useRef();
  const customSelectListRef = React.useRef();

  const { setRef, onKeyDown: handleListItemKeyDown, itemsRefs } = useKeyboardNavigation({
    itemsLength: options.filter(x => !x.disabled).length,
    onEscape: () => {
      dispatch({ type: ActionTypes['Select.Close'] });
      buttonRef.current.focus();
    },
  });

  React.useLayoutEffect(() => {
    if (itemsRefs.length > 0 && itemsRefs.every(i => Boolean(i))) {
      itemsRefs[0].focus();
    }
  }, [open]);

  const inputWrapperRef = React.useRef();
  useOnClickOutside([customSelectListRef, inputWrapperRef], () =>
    dispatch({ type: ActionTypes['Select.Close'] }),
  );

  const handleClickListItem = ({ selected, option }, e) => {
    dispatch({
      type: selected ? ActionTypes['Select.DeselectValue'] : ActionTypes['Select.SelectValue'],
      payload: option,
    });
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
  actionTypes: ActionTypes,
  reducer: defaultSelectReducer,
  initialState: defaultSelectInitialState,
  components: defaultComponents,
};
Select.Provider = SelectStateProvider;
Select.Consumer = SelectStateContext.Consumer;
Select.Context = SelectStateContext;
Select.useSelectReducer = useSelectReducer;

Select.defaults = defaults;

export { Select };
