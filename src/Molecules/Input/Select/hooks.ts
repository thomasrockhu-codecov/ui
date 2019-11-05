import * as React from 'react';
import { Props } from './Select.types';

export const useAutofocus = (ref: React.RefObject<any>, enable?: boolean) => {
  React.useEffect(() => {
    if (enable && ref && ref.current) ref.current.focus();
  }, [enable, ref]);
};

export const useFocusFromMachine = (machineState, buttonRef, itemRefs, searchRef) => {
  const isInButtonFocusState = machineState.matches('interaction.enabled.active.focus.button');
  React.useEffect(() => {
    if (
      machineState.matches('interaction.enabled.active.focus.listItem') &&
      machineState.matches({ open: 'on' })
    ) {
      if (searchRef.current) {
        searchRef.current.focus();
        if (
          itemRefs[machineState.context.itemFocusIdx] &&
          itemRefs[machineState.context.itemFocusIdx].scrollIntoView
        )
          itemRefs[machineState.context.itemFocusIdx].scrollIntoView({ block: 'nearest' });
      }
    } else if (isInButtonFocusState) {
      if (buttonRef.current) buttonRef.current.focus();
    }
  }, [machineState.context.itemFocusIdx, isInButtonFocusState]); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useIsFirstRender = () => {
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
};

export const useBatchedSend = (send: Function) => {
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

export const useSyncPropsWithMachine = (propsToSync: Partial<Props>, deps: Array<any>) => {
  const send = deps[0];
  React.useEffect(() => {
    send({
      type: 'SYNC',
      payload: propsToSync,
    });
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useMultiRef = () => {
  const itemRefs = React.useMemo(() => [] as Array<React.RefObject<any>>, []);
  const setItemRef = React.useCallback(
    (index: number) => (ref: React.RefObject<any>) => {
      if (ref) itemRefs[index] = ref;
    },
    [],
  );
  return [itemRefs, setItemRef];
};

export const useDelegateKeyDownToMachine = (send: Function, selectOnSpace: boolean) => {
  const sendBatched = useBatchedSend(send);

  const keyActionMap = new Map([
    ['ArrowDown', 'FOCUS_NEXT_ITEM'],
    ['ArrowUp', 'FOCUS_PREV_ITEM'],
    ['Escape', 'TOGGLE'],
    ['Enter', 'SELECT_FOCUSED_ITEM'],
    ['Tab', ''],
  ]);

  if (selectOnSpace) {
    keyActionMap.set(' ', 'SELECT_FOCUSED_ITEM');
  }

  return (e: React.KeyboardEvent) => {
    if (keyActionMap.has(e.key)) {
      sendBatched(['KEY_PRESS', keyActionMap.get(e.key)]);
      e.preventDefault();
      return false;
    }
    sendBatched(['KEY_PRESS']);
    return undefined;
  };
};

export const usePropagateChangesThroughOnChange = (machineState, send, onChange, isFirstRender) => {
  const isChangeUncommitted =
    machineState.matches('selection.controlled.changeUncommitted') ||
    machineState.matches('selection.uncontrolled.changeUncommitted');

  React.useEffect(() => {
    // Don't want to grab first onChange
    // Why is it happenning though 🤔
    if (isFirstRender) return;
    if (isChangeUncommitted) {
      if (onChange) onChange(machineState.context.uncommitedSelectedItems);
      send('CHANGE_COMMIT');
    }
  }, [isChangeUncommitted, onChange]);
};

export const useOnBlurAndOnFocus = (
  machineState,
  send,
  onBlur,
  onFocus,
  wrapperRef,
  isFirstRender,
) => {
  const isPassive = machineState.matches('interaction.enabled.idle');
  React.useEffect(() => {
    if (!isFirstRender && isPassive && onBlur) onBlur();
  }, [isPassive]);

  const isActive = machineState.matches('interaction.enabled.active');
  React.useEffect(() => {
    if (isActive && onFocus) onFocus();
  }, [isActive]);

  const handleFocus = React.useCallback(
    e => {
      send('FOCUS');
    },
    [send],
  );

  const handleBlur = React.useCallback(
    e => {
      setTimeout(() => {
        // Need setTimeout for activeElement to be correct
        if (wrapperRef.current && !wrapperRef.current.contains(document.activeElement)) {
          send('BLUR');
        }
      }, 1);
    },
    [send],
  );

  return { handleFocus, handleBlur };
};
