import { FlexPropsType } from './shared.types';

export const SORT_ORDER_NONE = 'none';
export const SORT_ORDER_ASCENDING = 'ascending';
export const SORT_ORDER_DESCENDING = 'descending';

export const COLUMN_ID_EXPAND = 'column-expand';

export const ICON_COLUMN_DEFAULT_FLEX_PROPS: FlexPropsType = {
  justifyContent: 'flex-end',
  md: {
    justifyContent: 'center',
  },
};

export const persistedSortOrderLocalStorageKey = 'flexTableSortOrder';
