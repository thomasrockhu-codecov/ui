import { useContext } from 'react';
import LinkContext from './context';

export const useLink = () => {
  return useContext(LinkContext);
};

export default useLink;
