import React from 'react';
import { useMachine } from '@xstate/react';
import styled from 'styled-components';

import { useOnClickOutside } from '../../../common/Hooks';

import { noop } from './utils';

import {
  ListItemWrapper,
  ListWrapper,
  SelectedValueWrapper,
  FormFieldOrFragment,
} from './wrappers';
import { useSelectMachineFromContext, SelectStateContext } from './context';
import { useComponentsWithDefaults } from './defaults';
import { SelectMachine } from './machine';
import { searchMachine } from './searchMachine';
import { Props } from './Select.types';

import { assert } from '../../../common/utils';

/* eslint-disable spaced-comment */
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

const useAutofocus = (ref: React.RefObject<any>, enable?: boolean) => {
  React.useEffect(() => {
    if (enable && ref && ref.current) ref.current.focus();
  }, [enable]);
};

const useFocusFromMachine = (machineState, buttonRef, itemRefs) => {
  React.useEffect(() => {
    if (
      machineState.matches('interaction.enabled.active.focus.listItem.anyItemFocused') &&
      machineState.matches({ open: 'on' })
    ) {
      if (itemRefs[machineState.context.itemFocusIdx])
        itemRefs[machineState.context.itemFocusIdx].focus();
    } else if (machineState.matches('interaction.enabled.active.focus')) {
      if (buttonRef.current) buttonRef.current.focus();
    }
  }, [machineState]);
};

const useIsFirstRender = () => {
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
};

const useBatchedSend = (send: Function) => {
  const accumulatedArrowActions = React.useRef([] as any[]);
  const currentTimeoutId = React.useRef<NodeJS.Timeout | null>(null);

  return React.useCallback(
    (actionTypes: any[]) => {
      accumulatedArrowActions.current.push(...actionTypes);
      if (currentTimeoutId.current) clearTimeout(currentTimeoutId.current);
      currentTimeoutId.current = setTimeout(() => {
        currentTimeoutId.current = null;
        // Sending array of actions enables batching
        const actions = [...accumulatedArrowActions.current];
        accumulatedArrowActions.current = [];
        send(actions);
      }, 0);
    },
    [send],
  );
};

const useSyncTwoMachines = (mainMachineSend, searchMachineState, searchMachineSend) => {
  React.useEffect(() => {
    if (searchMachineState.matches('search')) {
      searchMachineSend({ type: 'SEARCHED' });
      mainMachineSend({ type: 'SEARCH', payload: searchMachineState.context.searchQuery });
    }
  }, [searchMachineState]);
};

const useSyncPropsWithMachine = (propsToSync, deps) => {
  const send = deps[0];

  React.useEffect(() => {
    send({
      type: 'SYNC',
      payload: propsToSync,
    });
  }, deps);
};

const useMultiRef = () => {
  const itemRefs = React.useMemo(() => [], []);
  const setItemRef = React.useCallback(
    index => ref => {
      if (ref) itemRefs[index] = ref;
    },
    [],
  );
  return [itemRefs, setItemRef];
};

const useDelegateKeyDownToMachine = (send, searchMachineSend) => {
  const sendBatched = useBatchedSend(send);

  return React.useCallback(
    e => {
      if (keyActionMap.keys.includes(e.key)) {
        sendBatched(['KEY_PRESS', keyActionMap[e.key]]);
        e.preventDefault();
        return false;
      }
      searchMachineSend({ type: 'CHANGE', payload: e.key });
      send(['KEY_PRESS']);
    },
    [searchMachineSend, sendBatched],
  );
};
const usePropagateChangesThroughOnChange = (machineState, send, onChange, isFirstRender) => {
  React.useEffect(() => {
    // Don't want to grab first onChange
    // Why is it happenning though 🤔
    if (isFirstRender) return;
    if (machineState.matches({ selection: 'changeUncommitted' })) {
      if (onChange) onChange(machineState.context.selectedItems);
      send('CHANGE_COMMIT');
    }
  }, [machineState, onChange]);
};
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
    }),
  );
  const [machineState, send] = machineHandlers;
  const [searchMachineState, searchMachineSend] = useMachine(searchMachine);

  /******      Machine syncing      ******/
  usePropagateChangesThroughOnChange(machineState, send, props.onChange, isFirstRender);
  useSyncTwoMachines(send, searchMachineState, searchMachineSend);
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
    ],
  );

  /******      Handlers      ******/
  const handleClickListItem = option => e => {
    e.preventDefault();
    send({ type: 'ITEM_CLICK', payload: option });
    return false;
  };

  const handleKeyDown = useDelegateKeyDownToMachine(send, searchMachineSend);

  const isKeyboardNavigation = machineState.matches(
    'interaction.enabled.active.navigation.keyboard',
  );

  const handleMouseMove = React.useCallback(() => {
    if (isKeyboardNavigation) {
      send('MOUSE_MOVE');
    }
  }, [isKeyboardNavigation]);

  /******      Refs      ******/
  const buttonRef = React.useRef(null);
  const [itemRefs, setItemRef] = useMultiRef();
  const listRef = React.useRef(null);
  const formFieldRef = React.useRef(null);

  /******      Focus management      ******/
  useAutofocus(buttonRef, props.autoFocus);
  useFocusFromMachine(machineState, buttonRef, itemRefs);
  useOnClickOutside([listRef, formFieldRef], () => send({ type: 'BLUR' }));

  /******      Renderers      ******/
  const { ListItem, List, SelectedValue } = useComponentsWithDefaults(props.components, {
    multiselect: machineState.context.multiselect,
  });

  /******      Values from machine      ******/
  const isOpen = machineState.context.open;
  const isDisabled = machineState.context.disabled;
  const error = machineState.context.error;
  const success = machineState.context.success;
  const extraInfo = machineState.context.extraInfo;

  return (
    <>
      <HiddenSelect name={props.name} disabled={machineState.context.disabled} aria-hidden="true">
        {machineState.context.placeholder && (
          <option
            label={machineState.context.placeholder}
            value=""
            {...(machineState.context.selectedItems.length === 0 ? { selected: true } : {})}
          />
        )}
        {machineState.context.options.map(x => (
          <option
            label={x.label}
            value={x.value}
            {...(machineState.context.selectedItems.includes(x) ? { selected: true } : {})}
          />
        ))}
      </HiddenSelect>
      <SelectStateContext.Provider value={machineHandlers}>
        <FormFieldOrFragment
          label={machineState.context.label}
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
        >
          <SelectedValueWrapper
            ref={buttonRef}
            open={isOpen}
            label={machineState.context.label}
            disabled={isDisabled}
            noFormField={props.noFormField}
            placeholder={machineState.context.placeholder}
            component={SelectedValue}
            options={machineState.context.options}
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
            >
              {machineState.context.options.map((x: any, index: number) => (
                <ListItemWrapper
                  key={x.value}
                  isKeyboardNavigation={isKeyboardNavigation}
                  index={index}
                  ref={setItemRef(index)}
                  option={x}
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

export { Select };
