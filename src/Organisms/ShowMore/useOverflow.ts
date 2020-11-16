import { useState, useLayoutEffect } from 'react';

const useOverflow = (ref: React.RefObject<HTMLElement>, deps: React.ReactNode = null) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    const checkIfOverflowing = () => {
      if (ref.current) {
        setIsOverflowing(ref.current.clientHeight < ref.current.scrollHeight);
      }
    };

    window.addEventListener('resize', checkIfOverflowing);
    return () => window.removeEventListener('resize', checkIfOverflowing);
  }, [ref.current, deps]);

  return isOverflowing;
};

export default useOverflow;
