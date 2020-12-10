import { useLayoutEffect, useEffect } from 'react';

const canUseDOM = (): boolean => {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
