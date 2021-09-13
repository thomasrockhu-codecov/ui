import { ACTION_SET_INITIAL_SORTING, ACTION_SET_SORTING, ACTION_SET_WIDTH } from './ColumnProvider';
import { SortOrder } from '../../Header/HeaderContent/HeaderContent.types';

export type ColumnDataTypes = { sortOrder: SortOrder; controlledSort: boolean; width: number };
export type ColumnsDataState = {
  [columnId: string]: ColumnDataTypes;
};
export type ColumnsState = { data: ColumnsDataState };

export type ColumnsDispatch = (action: ColumnActions) => void;
export type AllKeys<T> = T extends T ? keyof T : never;
export type OmitOverAll<T, K extends AllKeys<T>> = T extends T
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type ColumnDispatch = (action: OmitOverAll<ColumnActions, 'columnId'>) => void;

type SetSortingAction = {
  type: typeof ACTION_SET_SORTING;
  columnId: string;
  sortOrder: SortOrder;
};

type SetInitialSortingAction = {
  type: typeof ACTION_SET_INITIAL_SORTING;
  columnId: string;
  sortOrder: SortOrder;
  controlledSort: boolean;
};

type SetWidthAction = {
  type: typeof ACTION_SET_WIDTH;
  columnId: string;
  width: number;
};

export type ColumnActions = SetSortingAction | SetInitialSortingAction | SetWidthAction;
