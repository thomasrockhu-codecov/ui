import { Props as FlexboxProps } from '../../../../Atoms/Flexbox/Flexbox.types';
import { ACTION_SET_FLEX_PROPS } from './ColumnProvider';

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

export type ColumnState = { flexProps: FlexPropsType };

export type ColumnsDispatch = (action: ColumnActions) => void;

export type ColumnDispatch = (action: Omit<ColumnActions, 'columnId'>) => void;

type SET_FLEX_ACTION = {
  type: typeof ACTION_SET_FLEX_PROPS;
  columnId: string;
  flexProps: FlexPropsType;
};

export type ColumnActions = SET_FLEX_ACTION;
