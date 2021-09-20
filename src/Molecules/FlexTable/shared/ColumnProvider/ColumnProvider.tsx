import React, { useContext, useReducer } from 'react';
import * as R from 'ramda';
import {
  ColumnActions,
  ColumnsDataState,
  ColumnsDispatch,
  ColumnsState,
} from './ColumnProvider.types';
import { SORT_ORDER_NONE } from '../constants';
import { FlexTableContext } from '../FlexTableProvider/FlexTableProvider';

export const ACTION_SET_SORTING = 'SET_SORTING';
export const ACTION_SET_INITIAL_SORTING = 'SET_INITIAL_SORTING';
export const ACTION_SET_WIDTH = 'SET_WIDTH';
export const ACTION_SET_FIT_CONTENT = 'SET_FIT_CONTENT';

export const ColumnDataContext = React.createContext<ColumnsDataState | undefined>(undefined);
export const ColumnDispatchContext = React.createContext<ColumnsDispatch | undefined>(undefined);

// We need to set the rest of the sorting to none when sorting a new header
const setRestOfSortingState = (data: ColumnsDataState): ColumnsDataState =>
  R?.map((columnData) => {
    // Null sortOrder means that it's not sortable
    if (columnData.sortOrder === null) {
      return { ...columnData, sortOrder: null };
    }

    return {
      ...columnData,
      sortOrder: columnData.controlledSort ? columnData.sortOrder : SORT_ORDER_NONE, // Keep the sort order if it's controlled
    };
  }, data);

const columnReducer = (state: ColumnsState, action: ColumnActions): ColumnsState => {
  switch (action.type) {
    case ACTION_SET_INITIAL_SORTING:
      return {
        ...state,
        data: {
          ...state.data,
          [action.columnId]: {
            ...state.data[action.columnId],
            controlledSort: action.controlledSort,
            sortOrder: action.sortOrder,
          },
        },
      };

    case ACTION_SET_SORTING:
      return {
        ...state,
        data: {
          ...setRestOfSortingState(state.data),
          [action.columnId]: {
            ...state.data[action.columnId],
            sortOrder: action.sortOrder,
          },
        },
      };

    case ACTION_SET_WIDTH:
      // eslint-disable-next-line no-case-declarations
      const isWider = (state.data[action.columnId]?.width ?? 0) < action.width;
      return isWider
        ? {
            ...state,
            data: {
              ...state.data,
              [action.columnId]: {
                ...state.data[action.columnId],
                width: action.width,
              },
            },
          }
        : state;

    case ACTION_SET_FIT_CONTENT:
      return {
        ...state,
        data: {
          ...state.data,
          [action.columnId]: {
            ...state.data[action.columnId],
            fitContent: action.payload,
          },
        },
      };

    default: {
      throw new Error('Unhandled action type, please check your action');
    }
  }
};

export const ColumnProvider: React.FC = ({ children }) => {
  const flexTableContextData = useContext(FlexTableContext);

  // re-casting since we aren't allowed to pass only column width props as initial state to columnReducer
  // we should be though since the sort props are initialized through a dispatch later on
  const columnWidthProps = flexTableContextData?.columnWidthProps as unknown as ColumnsDataState;

  const [state, dispatch] = useReducer(columnReducer, {
    data: columnWidthProps,
  });

  return (
    <ColumnDataContext.Provider value={state.data}>
      <ColumnDispatchContext.Provider value={dispatch}>{children}</ColumnDispatchContext.Provider>
    </ColumnDataContext.Provider>
  );
};
