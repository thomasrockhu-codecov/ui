import { useState, useLayoutEffect } from 'react';
import { throttle } from 'lodash';

const useOverflow = (ref: React.RefObject<HTMLElement>, deps = []) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useLayoutEffect(() => {
    const checkIfOverflowing = throttle(() => {
      if (ref.current) {
        setIsOverflowing(ref.current.clientHeight < ref.current.scrollHeight);
      }
    }, 50);

    checkIfOverflowing();

    const handleResize = () => {
      checkIfOverflowing();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref.current, ...deps]);

  return isOverflowing;
};

export default useOverflow;
