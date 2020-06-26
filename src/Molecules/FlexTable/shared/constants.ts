import { FlexPropsType } from './ColumnProvider/ColumnProvider.types';

// TODO: use theme spacing (on the following 3 constants)
export const DENSITY_PADDING_SMALL = 0;
export const DENSITY_PADDING_MEDIUM = 4;
export const DENSITY_PADDING_LARGE = 8;

export const SORT_ORDER_NONE = 'none';
export const SORT_ORDER_ASCENDING = 'ascending';
export const SORT_ORDER_DESCENDING = 'descending';

export const COLUMN_ID_EXPAND = 'column-expand';

export const ICON_COLUMN_DEFAULT_FLEX_PROPS: Pick<FlexPropsType, 'justifyContent' | 'flex'> = {
  justifyContent: 'flex-end',
  // TODO: use theme spacing
  flex: `0 20px`,
};
