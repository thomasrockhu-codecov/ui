import { useState, useCallback, useMemo, useRef } from 'react';
import { Props as TooltipProps } from '../Tooltip.types';

enum State {
  IDLE,
  BECOMING_VISIBLE,
  VISIBLE,
  LEAVING_VISIBLE,
}

const OPEN_DELAY: number = 100;
const CLOSE_DELAY: number = 500;

export const useTooltip = (mode: TooltipProps['mode']) => {
  const timeoutIds = useRef<{ openDelay: any; closeDelay: any }>({ openDelay: 0, closeDelay: 0 });
  const [state, setState] = useState<State>(State.IDLE);
  const isOpen = useMemo(() => {
    return state === State.VISIBLE || state === State.LEAVING_VISIBLE;
  }, [state]);

  const clearTimeouts = useCallback(() => {
    clearTimeout(timeoutIds.current.openDelay);
    clearTimeout(timeoutIds.current.closeDelay);
  }, []);

  const open = useCallback(() => {
    clearTimeouts();
    setState(State.VISIBLE);
  }, [clearTimeouts]);

  const close = useCallback(() => {
    clearTimeouts();
    setState(State.IDLE);
  }, [clearTimeouts]);

  const openWithDelay = useCallback(() => {
    setState(State.BECOMING_VISIBLE);
    clearTimeouts();
    timeoutIds.current.openDelay = setTimeout(() => {
      open();
    }, OPEN_DELAY);
  }, [clearTimeouts, open]);

  const closeWithDelay = useCallback(() => {
    setState(State.LEAVING_VISIBLE);
    clearTimeouts();
    timeoutIds.current.closeDelay = setTimeout(() => {
      close();
    }, CLOSE_DELAY);
  }, [clearTimeouts, close]);

  const handleMouseEnter = useCallback(() => {
    if (mode !== 'hover') return;

    if (!isOpen) {
      openWithDelay();
    } else if (state === State.LEAVING_VISIBLE) {
      open();
    }
  }, [mode, isOpen, state, openWithDelay, open]);

  const handleMouseMove = useCallback(() => {
    if (mode !== 'hover') return;

    if (!isOpen) {
      openWithDelay();
    } else if (state === State.LEAVING_VISIBLE) {
      open();
    }
  }, [mode, isOpen, state, openWithDelay, open]);

  const handleMouseLeave = useCallback(() => {
    if (mode !== 'hover') return;

    if (isOpen) {
      closeWithDelay();
    }
  }, [mode, isOpen, closeWithDelay]);

  const handleFocus = useCallback(() => {
    if (!isOpen) {
      open();
    }
  }, [isOpen, open]);

  const handleBlur = useCallback(() => {
    if (isOpen) {
      closeWithDelay();
    }
  }, [isOpen, closeWithDelay]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isOpen && (event.key === 'Escape' || event.key === 'Esc' || event.key === 'Enter')) {
        close();
      }
    },
    [close, isOpen],
  );

  const handleMouseDown = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [close, isOpen, open]);

  return {
    isOpen: state === State.VISIBLE || state === State.LEAVING_VISIBLE,
    handleMouseEnter,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseLeave,
    handleKeyDown,
    handleMouseDown,
  };
};
