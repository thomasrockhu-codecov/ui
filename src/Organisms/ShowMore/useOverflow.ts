import { useState } from 'react';
import { useSafeLayoutEffect } from '../../common/Hooks';

const useOverflow = (ref: React.RefObject<HTMLElement>, deps: React.ReactNode = null) => {
  const [isOverflowing, setIsOverflowing] = useState(true);

  useSafeLayoutEffect(() => {
    const checkIfOverflowing = () => {
      if (ref.current) {
        setIsOverflowing(ref.current.clientHeight < ref.current.scrollHeight);
      }
    };

    checkIfOverflowing();

    window.addEventListener('resize', checkIfOverflowing);
    return () => window.removeEventListener('resize', checkIfOverflowing);
  }, [ref.current, deps]);

  return isOverflowing;
};

export default useOverflow;
