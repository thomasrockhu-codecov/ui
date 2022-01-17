import { useLayoutEffect } from 'react';

const useSafeLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => {};

export default useSafeLayoutEffect;
