import { useContext } from 'react';
import { ColumnStateContext, ColumnDispatchContext } from './ColumnProvider';
import { ColumnActions } from './ColumnProvider.types';

export const useColumn = (columnId: string) => {
  const state = useContext(ColumnStateContext);
  const dispatch = useContext(ColumnDispatchContext);

  if (state === undefined || dispatch === undefined) {
    return [undefined, undefined];
  }
  const columnState = state[columnId];
  const columnDispatch = (action: Omit<ColumnActions, 'columnId'>) =>
    dispatch({ ...action, columnId });

  return [columnState, columnDispatch];
};
