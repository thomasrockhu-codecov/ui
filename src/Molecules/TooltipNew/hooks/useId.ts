import { useState, useEffect } from 'react';

let idGenerator = 0;
const generateNewId = () => {
  // eslint-disable-next-line no-plusplus
  return ++idGenerator;
};

export const useId = () => {
  const [id, setId] = useState<number>(0);

  useEffect(() => {
    setId(generateNewId());
  }, []);

  return id;
};
