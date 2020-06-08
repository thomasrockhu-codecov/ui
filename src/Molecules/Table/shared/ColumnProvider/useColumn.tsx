import { useContext, useCallback } from 'react';
import { ColumnStateContext, ColumnDispatchContext } from './ColumnProvider';
import { ColumnsDispatch, ColumnsState, ColumnDispatch, ColumnState } from './ColumnProvider.types';

export const useColumnProvider = (): [ColumnsState, ColumnsDispatch] => {
  const state = useContext(ColumnStateContext);
  const dispatch = useContext(ColumnDispatchContext);

  if (state === undefined || dispatch === undefined) {
    throw Error('Using useColumnProvider outside ColumnProvider');
  }

  return [state, dispatch];
};

// TODO: Set up types for column state and column dispatch which is specific to a columnId
export const useColumn = (columnId: string): [ColumnState, ColumnDispatch] => {
  const [state, dispatch] = useColumnProvider();

  const columnState = state[columnId];
  const columnDispatch: ColumnDispatch = useCallback(
    action => {
      dispatch({ ...action, columnId });
    },
    [columnId, dispatch],
  );

  return [columnState, columnDispatch];
};
