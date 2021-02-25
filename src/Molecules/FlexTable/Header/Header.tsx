import React, { useContext, useEffect } from 'react';
import * as R from 'ramda';
import styled from 'styled-components';
import { HeaderComponent } from './Header.types';
import { SortOrder } from './HeaderContent/HeaderContent.types';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING, SORT_ORDER_NONE } from '../shared/constants';
import {
  useFlexCellProps,
  useColumnData,
  ACTION_SET_SORTING,
  ACTION_SET_INITIAL_SORTING,
} from '../shared/ColumnProvider';
import { HeaderContent, TextWrapper, SortIcon, SortButton } from './HeaderContent';
import { getStylesForSizes } from '../shared';
import { useFlexTable } from '../shared/FlexTableProvider';
import { Density } from '../shared/shared.types';
import { getDensityPaddings } from '../shared/textUtils';
import { FlexTableContext } from '../shared/FlexTableProvider/FlexTableProvider';

const SORT_ORDERS: SortOrder[] = [SORT_ORDER_NONE, SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING];

const getNextSortOrder = (currentOrder: SortOrder): SortOrder => {
  const currentIndex = SORT_ORDERS.indexOf(currentOrder);
  const nextIndex = (currentIndex + 1) % SORT_ORDERS.length;
  return SORT_ORDERS[nextIndex];
};

const getSortOrder = (
  stateSortOrder: SortOrder | undefined,
  sortOrderProp: SortOrder | undefined,
  persistedSortOrder: SortOrder | undefined,
  initialSortOrder: SortOrder,
) => stateSortOrder || sortOrderProp || persistedSortOrder || initialSortOrder;

type ScreenSizeConfigurableProps = { density: Density };
type StyledFlexboxProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

// TODO: using '!important' here because Flexbox (used in Row) sets padding-top: 0 on its children, investigate how / if this can be solved in a better way.
const getDensityStyles = ({ density }: { density: Density }) => `
  padding-top: ${getDensityPaddings(density)}px !important;
  padding-bottom: ${getDensityPaddings(density)}px;
`;

const StyledFlexbox = styled(Flexbox)<StyledFlexboxProps>`
  overflow: hidden;
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      density: getDensityStyles,
    },
  )}
`;

const persistedSortOrderLocalStorageKey = 'flexTableSortOrder';

const tableHasSavedPersistedSortOrder = (
  persistSortingOrder: boolean,
  tableId: string | undefined,
) => {
  if (!persistSortingOrder || !tableId) {
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

const getPersistedSortOrder = (
  persistSortingOrder: boolean,
  tableId: string | undefined,
  columnId: string,
) => {
  if (tableId && tableHasSavedPersistedSortOrder(persistSortingOrder, tableId)) {
    const sortedSortOrders = localStorage.getItem(persistedSortOrderLocalStorageKey);
    const parsed = sortedSortOrders ? JSON.parse(sortedSortOrders) : {};
    if (parsed[tableId].columnId === columnId) {
      return parsed[tableId].sortOrder ?? null;
    }
  }
  return null;
};

const setPersistedSortOrder = (
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

const Header: HeaderComponent = (props) => {
  const {
    children,
    className,
    initialSortOrder = SORT_ORDER_NONE,
    sortable = false,
    sortOrder: sortOrderProp,
    onSort = () => {},
    columnId,
  } = props;

  const { xs, sm, md, lg, xl } = useFlexTable<'density'>('density');
  const contextData = useContext(FlexTableContext);
  if (contextData === undefined) {
    throw Error('No FlexTable provider, FlexTable rows can only be children of a FlexTable');
  }
  const { id: tableId, persistSortingOrder } = contextData;

  const [columnState, columnDispatch] = useColumnData(columnId);

  const persistedSortOrder = persistSortingOrder
    ? getPersistedSortOrder(persistSortingOrder, tableId, columnId)
    : null;

  const savedSortOrderExists = tableHasSavedPersistedSortOrder(persistSortingOrder, tableId);

  const sortOrder = sortable
    ? getSortOrder(
        R.prop('sortOrder', columnState),
        sortOrderProp,
        persistedSortOrder,
        savedSortOrderExists ? 'none' : initialSortOrder,
      )
    : null;
  const ariaSorted = sortable ? { 'aria-sort': sortOrder } : {};
  const cellFlexProps = useFlexCellProps(props);
  const controlledSort = sortOrderProp !== undefined;

  useEffect(() => {
    columnDispatch({
      type: ACTION_SET_INITIAL_SORTING,
      sortOrder,
      controlledSort,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // If the sortOrder changes from the outside, update internal the column sort state
    if (controlledSort) {
      // TODO: Remove type assertion when typescript is able to assert undefined from constants, in this case controlledSort
      columnDispatch({ type: ACTION_SET_SORTING, sortOrder: sortOrderProp as SortOrder });
    }
  }, [sortOrderProp, controlledSort, columnDispatch]);

  const onSortClick = () => {
    const newSortOrder = getNextSortOrder(sortOrder || initialSortOrder);
    onSort(columnId, newSortOrder);
    if (!controlledSort) {
      columnDispatch({ type: ACTION_SET_SORTING, sortOrder: newSortOrder });
    }
    setPersistedSortOrder(tableId, columnId, newSortOrder);
  };

  const sorted = !R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE;
  return (
    <StyledFlexbox
      className={className}
      role="columnheader"
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...ariaSorted}
      {...cellFlexProps}
    >
      {isElement(children) && children}
      {isFunction(children)
        ? children({ sortable, sortOrder, onSortClick, sorted, columnId })
        : !isElement(children) && (
            <HeaderContent
              onSortClick={onSortClick}
              sortable={sortable}
              sortOrder={sortOrder}
              sorted={sorted}
            >
              {children}
            </HeaderContent>
          )}
    </StyledFlexbox>
  );
};

Header.TextWrapper = TextWrapper;
Header.SortIcon = SortIcon;
Header.SortButton = SortButton;

export default Header;
