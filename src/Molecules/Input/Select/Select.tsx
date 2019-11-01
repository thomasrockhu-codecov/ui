import React from 'react';
import { useMachine } from '@xstate/react';
import styled from 'styled-components';

import { useOnClickOutside } from '../../../common/Hooks';

import {
  ListItemWrapper,
  ListWrapper,
  SelectedValueWrapper,
  FormFieldOrFragment,
} from './wrappers';
import { useSelectMachineFromContext, SelectStateContext } from './context';
import {
  useComponentsWithDefaults,
  defaultComponents,
  defaultComponentsMultiselect,
} from './defaults';
import { SelectMachine } from './machine';
import { Props } from './Select.types';

import { assert } from '../../../common/utils';

import {
  useAutofocus,
  useDelegateKeyDownToMachine,
  useFocusFromMachine,
  useIsFirstRender,
  useMultiRef,
  usePropagateChangesThroughOnChange,
  useSyncPropsWithMachine,
  useOnBlurAndOnFocus,
} from './hooks';

/* eslint-disable spaced-comment */
const HiddenSelect = styled.select`
  display: none;
`;
const noop = () => {};

const Select = (props: Props) => {
  assert(Boolean(props.id), `Input.Select: "id" is required.`);

  const isFirstRender = useIsFirstRender();

  /******      Machine instantiation      ******/
  const machineHandlers = useMachine(
    SelectMachine.withContext({
      label: props.label,
      error: props.error,
      success: props.success,
      options: props.options,
      selectedItems: props.value || [],
      disabled: props.disabled,
      open: false,
      itemFocusIdx: null,
      placeholder: props.placeholder,
      searchQuery: '',
      extraInfo: props.extraInfo,
      multiselect: props.multiselect || false,
      lastNavigationType: null,
      visibleOptions: props.options,
      showSearch: props.showSearch || false,
      id: props.id,
    }),
  );
  const [machineState, send] = machineHandlers;

  /******      Machine syncing      ******/
  usePropagateChangesThroughOnChange(machineState, send, props.onChange, isFirstRender);
  useSyncPropsWithMachine(
    {
      label: props.label,
      options: props.options,
      placeholder: props.placeholder,
      error: props.error,
      selectedItems: props.value || [],
      success: props.success,
      disabled: props.disabled,
      extraInfo: props.extraInfo,
      multiselect: props.multiselect,
      showSearch: props.showSearch || false,
      id: props.id,
    },
    [
      send,
      props.label,
      props.options,
      props.placeholder,
      props.error,
      props.success,
      props.disabled,
      props.extraInfo,
      props.value,
      props.multiselect,
      props.showSearch,
      props.id,
    ],
  );

  /******      Handlers      ******/
  const handleClickListItem = option => e => {
    e.preventDefault();
    send({ type: 'ITEM_CLICK', payload: option });
    return false;
  };

  const handleKeyDown = useDelegateKeyDownToMachine(send, !props.showSearch);

  const isKeyboardNavigation = machineState.matches(
    'interaction.enabled.active.navigation.keyboard',
  );

  const handleMouseMove = React.useCallback(() => {
    if (isKeyboardNavigation) {
      send('MOUSE_MOVE');
    }
  }, [send, isKeyboardNavigation]);

  /******      Refs      ******/
  const buttonRef = React.useRef(null);
  const [itemRefs, setItemRef] = useMultiRef();
  const listRef = React.useRef(null);
  const formFieldRef = React.useRef(null);
  const searchRef = React.useRef(null);

  /******      Focus management      ******/
  useAutofocus(buttonRef, props.autoFocus);
  useFocusFromMachine(machineState, buttonRef, itemRefs, searchRef);
  useOnClickOutside([listRef, formFieldRef], () => send({ type: 'BLUR' }));
  const { handleBlur, handleFocus } = useOnBlurAndOnFocus(
    machineState,
    send,
    props.onBlur,
    props.onFocus,
    formFieldRef,
    isFirstRender,
  );

  /******      Renderers      ******/
  const { ListItem, List, SelectedValue, Search } = useComponentsWithDefaults(props.components, {
    multiselect: machineState.context.multiselect,
  });

  /******      Values from machine      ******/
  const isOpen = machineState.context.open;
  const isDisabled = machineState.context.disabled;
  const error = machineState.context.error;
  const success = machineState.context.success;
  const extraInfo = machineState.context.extraInfo;
  const label = machineState.context.label;
  const placeholder = machineState.context.placeholder;
  const options = machineState.context.visibleOptions;
  const selectedItems = machineState.context.selectedItems;
  const multiselect = machineState.context.multiselect;

  return (
    <>
      <HiddenSelect
        name={props.name}
        disabled={isDisabled}
        aria-hidden="true"
        {...(multiselect ? { multiple: 'true' } : {})}
      >
        {placeholder && (
          <option
            label={placeholder}
            value=""
            {...(selectedItems.length === 0 ? { selected: true } : {})}
          />
        )}
        {options.map(x => (
          <option
            label={x.label}
            value={x.value}
            {...(selectedItems.includes(x) ? { selected: true } : {})}
          />
        ))}
      </HiddenSelect>
      <SelectStateContext.Provider value={machineHandlers}>
        <FormFieldOrFragment
          label={label}
          noFormField={props.noFormField}
          ref={formFieldRef}
          disabled={isDisabled}
          open={isOpen}
          fullWidth={props.fullWidth}
          error={error}
          success={success}
          extraInfo={extraInfo}
          id={props.id}
          size={props.size}
          onBlur={handleBlur}
          onFocus={handleFocus}
          width={props.width}
        >
          <SelectedValueWrapper
            ref={buttonRef}
            open={isOpen}
            label={label}
            disabled={isDisabled}
            noFormField={props.noFormField}
            placeholder={placeholder}
            component={SelectedValue}
            options={options}
            state={machineState}
            id={props.id}
          />
          {isOpen && (
            <ListWrapper
              component={List}
              noFormField={props.noFormField}
              onKeyDown={handleKeyDown}
              onMouseMove={handleMouseMove}
              ref={listRef}
              searchComponent={<Search ref={searchRef} />}
              width={props.width}
            >
              {options.map((x: any, index: number) => (
                <ListItemWrapper
                  key={x.value}
                  isKeyboardNavigation={isKeyboardNavigation}
                  index={index}
                  ref={setItemRef(index)}
                  option={x}
                  id={props.id}
                  onClick={x.disabled ? noop : handleClickListItem(x)}
                  component={ListItem}
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
Select.defaults = {
  components: defaultComponents,
  componentsMultiselect: defaultComponentsMultiselect,
};

export { Select };
