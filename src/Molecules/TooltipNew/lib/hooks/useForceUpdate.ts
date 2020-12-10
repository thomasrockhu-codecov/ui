import { useState, useCallback } from 'react';

const useForceUpdate = (): Function => {
  const [, dispatch] = useState<{}>(Object.create(null));
  return useCallback(() => {
    dispatch(Object.create(null));
  }, []);
};

export default useForceUpdate;
