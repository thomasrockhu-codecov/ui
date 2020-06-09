import React, { useReducer } from 'react';
import * as R from 'ramda';
import { ColumnActions, ColumnsState, ColumnsDispatch } from './ColumnProvider.types';
import { SORT_ORDER_NONE } from '../constants';

export const ACTION_SET_FLEX_PROPS = 'SET_FLEX_PROPS';
export const ACTION_SET_SORTING = 'SET_SORTING';

export const ColumnStateContext = React.createContext<ColumnsState | undefined>(undefined);
export const ColumnDispatchContext = React.createContext<ColumnsDispatch | undefined>(undefined);

// We need to set the rest of the sorting to none when sorting a new header
const setRestOfSortingState = (state: ColumnsState): ColumnsState =>
  R.map(columnData => {
    // Null sortOrder means that it's not sortable
    if (columnData.sortOrder === null) {
      return { ...columnData, sortOrder: null };
    }

    return {
      ...columnData,
      sortOrder: columnData.controlledSort ? columnData.sortOrder : SORT_ORDER_NONE, // Keep the sort order if it's controlled
    };
  }, state);

const columnReducer = (state: ColumnsState, action: ColumnActions): ColumnsState => {
  switch (action.type) {
    case ACTION_SET_FLEX_PROPS:
      return {
        ...state,
        [action.columnId]: { ...state[action.columnId], flexProps: action.flexProps },
      };

    case ACTION_SET_SORTING:
      return {
        ...setRestOfSortingState(state),
        [action.columnId]: {
          ...state[action.columnId],
          controlledSort: action.controlledSort,
          sortOrder: action.sortOrder,
        },
      };

    default: {
      // TODO: Fix typing of never on action.type
      // @ts-ignore
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const ColumnProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(columnReducer, {});

  return (
    <ColumnStateContext.Provider value={state}>
      <ColumnDispatchContext.Provider value={dispatch}>{children}</ColumnDispatchContext.Provider>
    </ColumnStateContext.Provider>
  );
};
