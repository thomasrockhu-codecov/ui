import * as React from 'react';

export const useAutofocus = (ref: React.RefObject<any>, enable?: boolean) => {
  React.useEffect(() => {
    if (enable && ref && ref.current) ref.current.focus();
  }, [enable]);
};

export const useFocusFromMachine = (machineState, buttonRef, itemRefs, searchRef) => {
  React.useEffect(() => {
    if (
      machineState.matches('interaction.enabled.active.focus.listItem') &&
      machineState.matches({ open: 'on' })
    ) {
      if (searchRef.current) {
        searchRef.current.focus();
        if (itemRefs[machineState.context.itemFocusIdx])
          itemRefs[machineState.context.itemFocusIdx].scrollIntoView({ block: 'nearest' });
      }
    } else if (machineState.matches('interaction.enabled.active.focus.button')) {
      if (buttonRef.current) buttonRef.current.focus();
    }
  }, [
    machineState.context.itemFocusIdx,
    machineState.matches('interaction.enabled.active.focus.button'),
  ]);
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

export const useSyncPropsWithMachine = (propsToSync, deps) => {
  const send = deps[0];

  React.useEffect(() => {
    send({
      type: 'SYNC',
      payload: propsToSync,
    });
  }, deps);
};

export const useMultiRef = () => {
  const itemRefs = React.useMemo(() => [], []);
  const setItemRef = React.useCallback(
    index => ref => {
      if (ref) itemRefs[index] = ref;
    },
    [],
  );
  return [itemRefs, setItemRef];
};

export const useDelegateKeyDownToMachine = (send, selectOnSpace) => {
  const sendBatched = useBatchedSend(send);

  const keyActionMap = {
    ArrowDown: 'FOCUS_NEXT_ITEM',
    ArrowUp: 'FOCUS_PREV_ITEM',
    Escape: 'TOGGLE',
    Enter: 'SELECT_FOCUSED_ITEM',
    Tab: '',
    ...(selectOnSpace ? { [' ']: 'SELECT_FOCUSED_ITEM' } : {}),
  };
  keyActionMap.keys = Object.keys(keyActionMap);
  return React.useCallback(
    e => {
      if (keyActionMap.keys.includes(e.key)) {
        sendBatched(['KEY_PRESS', keyActionMap[e.key]]);
        e.preventDefault();
        return false;
      }
      send(['KEY_PRESS']);
    },
    [sendBatched],
  );
};

export const usePropagateChangesThroughOnChange = (machineState, send, onChange, isFirstRender) => {
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
      }, 0);
    },
    [send],
  );

  return { handleFocus, handleBlur };
};
