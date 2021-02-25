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
  initialSortOrder: SortOrder,
) => stateSortOrder || sortOrderProp || initialSortOrder;

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
  const { id } = useContext(FlexTableContext);
  const {
    xs: xsPersistSortingOrder,
    sm: smPersistSortingOrder,
    md: mdPersistSortingOrder,
    lg: lgPersistSortingOrder,
    xl: xlPersistSortingOrder,
  } = useFlexTable<'persistSortingOrder'>('persistSortingOrder');

  const [columnState, columnDispatch] = useColumnData(columnId);
  const sortOrder = sortable
    ? getSortOrder(R.prop('sortOrder', columnState), sortOrderProp, initialSortOrder)
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
    // TODO make into function and get localstorage and parse.
    const flexTableSortOrder = {
      [`${id}`]: { column: columnId, sortOrder: newSortOrder },
    };
    localStorage.setItem('flexTableSortOrder', JSON.stringify(flexTableSortOrder));
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
