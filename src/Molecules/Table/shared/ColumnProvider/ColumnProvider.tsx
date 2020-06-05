import React, { useReducer } from 'react';
import { ColumnActions, ColumnReducer, ColumnDispatch } from './ColumnProvider.types';

export const ACTION_SET_FLEX_PROPS = 'SET_FLEX_PROPS';

export const ColumnStateContext = React.createContext<ColumnReducer | undefined>(undefined);
export const ColumnDispatchContext = React.createContext<ColumnDispatch | undefined>(undefined);

// TODO: Fix state type
const columnReducer = (state: any, action: ColumnActions) => {
  switch (action.type) {
    case ACTION_SET_FLEX_PROPS:
      return {
        ...state[action.columnId],
        [action.columnId]: { flexProps: action.flexProps },
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const ColumnProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(columnReducer, { columnName: { flexProps: { size: 4 } } });

  return (
    <ColumnStateContext.Provider value={state}>
      <ColumnDispatchContext.Provider value={dispatch}>{children}</ColumnDispatchContext.Provider>
    </ColumnStateContext.Provider>
  );
};
