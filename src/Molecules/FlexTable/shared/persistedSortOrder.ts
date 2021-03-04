import { SortOrder } from '../Header/HeaderContent/HeaderContent.types';
import { persistedSortOrderLocalStorageKey } from './constants';

export const setPersistedSortOrder = (
  tableId: string | undefined,
  columnId: string,
  newSortOrder: SortOrder,
) => {
  try {
    if (tableId) {
      const flexTableSortOrder = {
        [`${tableId}`]: { columnId, sortOrder: newSortOrder },
      };
      const sortedSortOrders = localStorage.getItem(persistedSortOrderLocalStorageKey);
      if (sortedSortOrders) {
        const parsed = JSON.parse(sortedSortOrders);
        if (parsed) {
          localStorage.setItem(
            persistedSortOrderLocalStorageKey,
            JSON.stringify({ ...parsed, ...flexTableSortOrder }),
          );
        }
      } else {
        localStorage.setItem(persistedSortOrderLocalStorageKey, JSON.stringify(flexTableSortOrder));
      }
    }
  } catch {
    // eslint-disable-next-line no-empty
    // Do nothing, fail silently
  }
};

export const tableHasSavedPersistedSortOrder = (tableId: string | undefined) => {
  if (!tableId) {
    return false;
  }
  try {
    const sortedSortOrders = localStorage.getItem(persistedSortOrderLocalStorageKey);
    if (!sortedSortOrders) {
      return false;
    }

    const parsed = JSON.parse(sortedSortOrders);
    if (!parsed) {
      return false;
    }
    return !!parsed[tableId];
  } catch {
    return false;
  }
};

export const getPersistedSortOrder = (
  tableId: string | undefined,
): { columnId: string; sortOrder: SortOrder } | null => {
  if (tableId && tableHasSavedPersistedSortOrder(tableId)) {
    try {
      const sortedSortOrders = localStorage.getItem(persistedSortOrderLocalStorageKey);
      const parsed = sortedSortOrders ? JSON.parse(sortedSortOrders) : {};
      return parsed[tableId] ?? null;
    } catch {
      return null;
    }
  }
  return null;
};
