import { useState, useCallback, useEffect, useRef } from 'react';
import { Props as TooltipProps } from '../Tooltip.types';
import { useId } from './useId';
import { store, State } from '../Tooltip.store';
import { useOnClickOutside } from '../../../common/Hooks';

export const useTooltip = (mode: TooltipProps['mode']) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const triggerElementRef = useRef(null);

  useEffect(() => {
    return store.subscribe(() => {
      if (
        store.contextId === id &&
        (store.state === State.VISIBLE || store.state === State.LEAVING_VISIBLE)
      ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, [id]);

  const handleMouseEnter = useCallback(() => {
    if (mode !== 'hover') return;

    if (!store.isVisible()) {
      store.startBecomingVisibleTimeout(id);
    } else if (store.state === State.LEAVING_VISIBLE) {
      store.setState(State.VISIBLE, id);
    }
  }, [id, mode]);

  const handleMouseMove = useCallback(() => {
    if (mode !== 'hover') return;

    if (!store.isVisible()) {
      store.startBecomingVisibleTimeout(id);
    } else if (store.state === State.LEAVING_VISIBLE) {
      store.setState(State.VISIBLE, id);
    }
  }, [id, mode]);

  const handleMouseLeave = useCallback(() => {
    if (mode !== 'hover') return;

    if (store.isVisible()) {
      store.startLeavingVisibleTimeout();
    }
  }, [mode]);

  const handleFocus = useCallback(() => {
    store.setState(State.VISIBLE, id);
  }, [id]);

  const handleBlur = useCallback(() => {
    if (store.isVisible()) {
      store.startLeavingVisibleTimeout();
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      store.isVisible() &&
      (event.key === 'Escape' || event.key === 'Esc' || event.key === 'Enter')
    ) {
      store.setState(State.IDLE);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    if (store.isVisible()) {
      store.setState(State.IDLE);
    } else {
      store.setState(State.VISIBLE, id);
    }
  }, [id]);

  useOnClickOutside(triggerElementRef, () => {
    if (id === store.contextId) store.setState(State.IDLE);
  });

  return {
    triggerElementRef,
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
