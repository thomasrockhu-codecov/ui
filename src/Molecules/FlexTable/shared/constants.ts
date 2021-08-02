import { FlexPropsType } from './shared.types';

export const SORT_ORDER_NONE = 'none';
export const SORT_ORDER_ASCENDING = 'ascending';
export const SORT_ORDER_DESCENDING = 'descending';

export const COLUMN_ID_EXPAND = 'column-expand';

export const ICON_COLUMN_DEFAULT_FLEX_PROPS: FlexPropsType = {
  flex: `0 ${(p) => p.theme.spacing.unit(5)}px`,
  justifyContent: 'flex-end',
  md: {
    flex: `0 ${(p) => p.theme.spacing.unit(10)}px`,
    justifyContent: 'center',
  },
};

export const persistedSortOrderLocalStorageKey = 'flexTableSortOrder';
