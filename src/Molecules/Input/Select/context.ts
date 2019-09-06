import * as React from 'react';

export const SelectStateContext = React.createContext<[React.Reducer<any, any>, any] | null>(null);

export const useSelectReducer = () => {
  const [state, dispatch] = React.useContext(SelectStateContext)!;
  return [state, dispatch];
};
