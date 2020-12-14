import { useState, useCallback, useEffect } from 'react';
import { Props as TooltipProps } from '../Tooltip.types';

enum State {
  IDLE,
  BECOMING_VISIBLE,
  VISIBLE,
  LEAVING_VISIBLE,
}

const OPEN_DELAY: number = 100;
const CLOSE_DELAY: number = 500;

let idGenerator = 0;
let leavingVisibleTimeout: number;
let becomingVisibleTimeout: number;
const context: { id: number | null } = { id: null };
let state: State = State.IDLE;

/** Subscriptions */
const subscriptions: Function[] = [];
function subscribe(fn: Function) {
  subscriptions.push(fn);
  return () => {
    subscriptions.splice(subscriptions.indexOf(fn), 1);
  };
}
function notify() {
  subscriptions.forEach((fn) => fn(state, context));
}

function clearBecomingVisibleTimeout() {
  window.clearTimeout(becomingVisibleTimeout);
}

function clearLeavingVisibleTimeout() {
  window.clearTimeout(leavingVisibleTimeout);
}

const setState = (newState: State, contextId?: number) => {
  const prevState = state;

  if (prevState === State.BECOMING_VISIBLE) {
    clearBecomingVisibleTimeout();
  } else if (prevState === State.LEAVING_VISIBLE) {
    clearLeavingVisibleTimeout();
    context.id = null;
  }

  state = newState;

  if (newState === State.IDLE) {
    context.id = null;
  }

  if (contextId) {
    context.id = contextId;
  }
  notify();
};

function startBecomingVisibleTimeout(id: number) {
  window.clearTimeout(becomingVisibleTimeout);
  setState(State.BECOMING_VISIBLE, id);
  becomingVisibleTimeout = window.setTimeout(() => {
    setState(State.VISIBLE, id);
  }, OPEN_DELAY);
}

function startLeavingVisibleTimeout() {
  window.clearTimeout(leavingVisibleTimeout);
  setState(State.LEAVING_VISIBLE);
  leavingVisibleTimeout = window.setTimeout(() => {
    setState(State.IDLE);
  }, CLOSE_DELAY);
}

export const useTooltip = (mode: TooltipProps['mode']) => {
  // eslint-disable-next-line no-plusplus
  const [id] = useState(++idGenerator);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return subscribe(() => {
      if (context.id === id && (state === State.VISIBLE || state === State.LEAVING_VISIBLE)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, [id]);

  const handleMouseEnter = useCallback(() => {
    if (mode !== 'hover') return;

    if (![State.LEAVING_VISIBLE, State.VISIBLE].includes(state)) {
      startBecomingVisibleTimeout(id);
    } else if (state === State.LEAVING_VISIBLE) {
      setState(State.VISIBLE, id);
    }
  }, [id, mode]);

  const handleMouseMove = useCallback(() => {
    if (mode !== 'hover') return;

    if (![State.LEAVING_VISIBLE, State.VISIBLE].includes(state)) {
      startBecomingVisibleTimeout(id);
    } else if (state === State.LEAVING_VISIBLE) {
      setState(State.VISIBLE, id);
    }
  }, [id, mode]);

  const handleMouseLeave = useCallback(() => {
    if (mode !== 'hover') return;

    if ([State.LEAVING_VISIBLE, State.VISIBLE].includes(state)) {
      startLeavingVisibleTimeout();
    }
  }, [mode]);

  const handleFocus = useCallback(() => {
    if (![State.LEAVING_VISIBLE, State.VISIBLE].includes(state)) {
      setState(State.VISIBLE, id);
    }
  }, [id]);

  const handleBlur = useCallback(() => {
    if ([State.LEAVING_VISIBLE, State.VISIBLE].includes(state)) {
      startLeavingVisibleTimeout();
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      [State.LEAVING_VISIBLE, State.VISIBLE].includes(state) &&
      (event.key === 'Escape' || event.key === 'Esc' || event.key === 'Enter')
    ) {
      setState(State.IDLE);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    if ([State.LEAVING_VISIBLE, State.VISIBLE].includes(state)) {
      setState(State.IDLE);
    } else {
      setState(State.VISIBLE, id);
    }
  }, []);

  return {
    isOpen,
    handleMouseEnter,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseLeave,
    handleKeyDown,
    handleMouseDown,
  };
};
