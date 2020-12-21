import { useState, useEffect } from 'react';

let idGenerator = 0;
const generateNewId = () => {
  // eslint-disable-next-line no-plusplus
  return ++idGenerator;
};

export const useId = (prefix: string) => {
  const [id, setId] = useState<string>('');

  useEffect(() => {
    setId(`${prefix}${generateNewId()}`);
  }, [prefix]);

  return id;
};
