import React, { useReducer } from 'react';
import { ColumnActions, ColumnState, ColumnDispatch } from './ColumnProvider.types';

export const ACTION_SET_FLEX_PROPS = 'SET_FLEX_PROPS';

export const ColumnStateContext = React.createContext<ColumnState | undefined>(undefined);
export const ColumnDispatchContext = React.createContext<ColumnDispatch | undefined>(undefined);

const columnReducer = (state: ColumnState, action: ColumnActions): ColumnState => {
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
  const [state, dispatch] = useReducer(columnReducer, {});

  return (
    <ColumnStateContext.Provider value={state}>
      <ColumnDispatchContext.Provider value={dispatch}>{children}</ColumnDispatchContext.Provider>
    </ColumnStateContext.Provider>
  );
};
