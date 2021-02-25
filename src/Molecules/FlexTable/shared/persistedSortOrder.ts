import { SortOrder } from '../Header/HeaderContent/HeaderContent.types';
import { persistedSortOrderLocalStorageKey } from './constants';

export const tableHasSavedPersistedSortOrder = (tableId: string | undefined) => {
  if (!tableId) {
    return false;
  }

  const sortedSortOrders = localStorage.getItem(persistedSortOrderLocalStorageKey);
  if (!sortedSortOrders) {
    return false;
  }

  const parsed = JSON.parse(sortedSortOrders);
  if (!parsed) {
    return false;
  }
  return !!parsed[tableId];
};

export const getPersistedSortOrder = (
  tableId: string | undefined,
): { columnId: string; sortOrder: SortOrder } | null => {
  if (tableId && tableHasSavedPersistedSortOrder(tableId)) {
    const sortedSortOrders = localStorage.getItem(persistedSortOrderLocalStorageKey);
    const parsed = sortedSortOrders ? JSON.parse(sortedSortOrders) : {};
    return parsed[tableId] ?? null;
  }
  return null;
};
