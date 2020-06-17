import { Props as FlexboxProps } from '../../../../Atoms/Flexbox/Flexbox.types';
import {
  ACTION_SET_FLEX_PROPS,
  ACTION_SET_INITIAL_SORTING,
  ACTION_SET_SORTING,
} from './ColumnProvider';
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

type LayoutPropsTypes = {
  [columnId: string]: { flexProps: FlexPropsType };
};

export type ColumnState = {
  sortOrder: SortOrder;
  controlledSort: boolean;
} & ColumnsLayoutState;

export type ColumnsDispatch = (action: ColumnActions) => void;

export type ColumnsLayoutState = { layoutProps: LayoutPropsTypes };

export type AllKeys<T> = T extends T ? keyof T : never;
export type OmitOverAll<T, K extends AllKeys<T>> = T extends T
  ? Pick<T, Exclude<keyof T, K>>
  : never;

export type ColumnDispatch = (action: OmitOverAll<ColumnActions, 'columnId'>) => void;

type SetFlexAction = {
  type: typeof ACTION_SET_FLEX_PROPS;
  columnId: string;
  flexProps: FlexPropsType;
};

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

export type ColumnActions = SetFlexAction | SetSortingAction | SetInitialSortingAction;
