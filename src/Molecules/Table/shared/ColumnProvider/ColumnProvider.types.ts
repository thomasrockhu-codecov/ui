import { Props as FlexboxProps } from '../../../../Atoms/Flexbox/Flexbox.types';
import { ACTION_SET_FLEX_PROPS, ACTION_SET_SORTING } from './ColumnProvider';
import { SortOrder } from '../../Header/HeaderContent/HeaderContent.types';

export type FlexPropsType = Pick<
  FlexboxProps,
  | 'align'
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'basis'
  | 'container'
  | 'direction'
  | 'flex'
  | 'grow'
  | 'gutter'
  | 'height'
  | 'item'
  | 'justifyContent'
  | 'lg'
  | 'md'
  | 'order'
  | 'shrink'
  | 'size'
  | 'sm'
  | 'wrap'
>;

// TODO: Set correct state type
export type ColumnsState = {
  [columnId: string]: ColumnState;
};

export type ColumnState = {
  flexProps: FlexPropsType;
  sortOrder: SortOrder;
  controlledSort: boolean;
};

export type ColumnsDispatch = (action: ColumnActions) => void;

export type AllKeys<T> = T extends T ? keyof T : never;
export type OmitOverAll<T, K extends AllKeys<T>> = T extends T
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type ColumnDispatch = (action: OmitOverAll<ColumnActions, 'columnId'>) => void;

type SET_FLEX_ACTION = {
  type: typeof ACTION_SET_FLEX_PROPS;
  columnId: string;
  flexProps: FlexPropsType;
};

type SET_SORTING_ACTION = {
  type: typeof ACTION_SET_SORTING;
  columnId: string;
  sortOrder: SortOrder;
  controlledSort: boolean;
};

export type ColumnActions = SET_FLEX_ACTION | SET_SORTING_ACTION;
