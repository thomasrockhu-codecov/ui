import React, { useReducer } from 'react';
import { ColumnActions, ColumnsState, ColumnsDispatch } from './ColumnProvider.types';

export const ACTION_SET_FLEX_PROPS = 'SET_FLEX_PROPS';

export const ColumnStateContext = React.createContext<ColumnsState | undefined>(undefined);
export const ColumnDispatchContext = React.createContext<ColumnsDispatch | undefined>(undefined);

const columnReducer = (state: ColumnsState, action: ColumnActions): ColumnsState => {
  switch (action.type) {
    case ACTION_SET_FLEX_PROPS:
      return {
        ...state,
        [action.columnId]: { flexProps: action.flexProps },
      };

    default: {
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
