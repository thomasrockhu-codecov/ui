import { useEffect, useState } from 'react';

let idGenerator = 0;
const generateNewId = () => {
  // eslint-disable-next-line no-plusplus
  return ++idGenerator;
};

const useGeneratedId = (prefix: string) => {
  const [id, setId] = useState<string>('');

  useEffect(() => {
    setId(`${prefix}${generateNewId()}`);
  }, [prefix]);

  return id;
};

export default useGeneratedId;
