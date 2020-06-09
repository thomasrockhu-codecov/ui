import React, { useEffect } from 'react';
import * as R from 'ramda';
import { HeaderComponent } from './Header.types';
import { SortOrder } from './HeaderContent/HeaderContent.types';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING, SORT_ORDER_NONE } from '../shared/constants';
import {
  useFlexCellProps,
  useColumn,
  ACTION_SET_FLEX_PROPS,
  ACTION_SET_SORTING,
} from '../shared/ColumnProvider';
import { HeaderContent, TextWrapper, SortIcon, SortButton } from './HeaderContent';

const SORT_ORDERS: SortOrder[] = [SORT_ORDER_NONE, SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING];

const getNextSortOrder = (currentOrder: SortOrder): SortOrder => {
  const currentIndex = SORT_ORDERS.indexOf(currentOrder);
  const nextIndex = (currentIndex + 1) % SORT_ORDERS.length;
  return SORT_ORDERS[nextIndex];
};

const getSortOrder = (
  stateSortOrder: SortOrder | undefined,
  sortOrderProp: SortOrder | undefined,
  initialSortOrder: SortOrder,
) => stateSortOrder || sortOrderProp || initialSortOrder;

const Header: HeaderComponent = props => {
  const {
    children,
    className,
    initialSortOrder = SORT_ORDER_NONE,
    sortable = false,
    sortOrder: sortOrderProp,
    onSort = () => {},
    density = 'm',
    fontSize,
    columnId,
  } = props;

  const [columnState, columnDispatch] = useColumn(columnId);
  const sortOrder = sortable
    ? getSortOrder(columnState && columnState.sortOrder, sortOrderProp, initialSortOrder)
    : null;
  const ariaSorted = sortable ? { 'aria-sort': sortOrder } : {};
  const cellFlexProps = useFlexCellProps(props);
  const controlledSort = sortOrderProp !== undefined;

  // Initiate sorting
  useEffect(() => {
    columnDispatch({
      type: ACTION_SET_SORTING,
      sortOrder,
      controlledSort,
    });
  }, []);

  useEffect(() => {
    // If the sortOrder changes from the outside, update internal the column sort state
    if (controlledSort) {
      // @ts-ignore
      columnDispatch({ type: ACTION_SET_SORTING, sortOrder: sortOrderProp, controlledSort });
    }
  }, [sortOrderProp, controlledSort, columnDispatch]);

  const onSortClick = () => {
    const newSortOrder = getNextSortOrder(sortOrder || initialSortOrder);
    onSort(newSortOrder, columnId);
    if (!controlledSort) {
      columnDispatch({ type: ACTION_SET_SORTING, sortOrder: newSortOrder, controlledSort });
    }
  };

  useEffect(() => {
    if (cellFlexProps) {
      columnDispatch({ type: ACTION_SET_FLEX_PROPS, flexProps: cellFlexProps });
    }
  }, [cellFlexProps, columnDispatch]);

  const sorted = !R.isNil(sortOrder) && sortOrder !== SORT_ORDER_NONE;

  return (
    <Flexbox
      className={className}
      role="columnheader"
      {...ariaSorted}
      {...cellFlexProps || columnState.flexProps}
    >
      {isElement(children) && children}
      {isFunction(children) ? (
        children({ density, fontSize, sortable, sortOrder, onSortClick, sorted, columnId })
      ) : (
        <HeaderContent
          onSortClick={onSortClick}
          sortable={sortable}
          sortOrder={sortOrder}
          density={density}
          fontSize={fontSize}
          sorted={sorted}
        >
          {children}
        </HeaderContent>
      )}
    </Flexbox>
  );
};

Header.TextWrapper = TextWrapper;
Header.SortIcon = SortIcon;
Header.SortButton = SortButton;

export default Header;
