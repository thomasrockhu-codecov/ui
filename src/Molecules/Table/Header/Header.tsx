import React, { useEffect } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Props, SortOrder } from './Header.types';
import { isElement } from '../../../common/utils';
import { Flexbox, Icon } from '../../..';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING, SORT_ORDER_NONE } from '../shared/constants';
import {
  useFlexCellProps,
  useColumn,
  ACTION_SET_FLEX_PROPS,
  ACTION_SET_SORTING,
} from '../shared/ColumnProvider';

const StyledIconChevronDown = styled(Icon.ChevronDown)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledIconThinArrow = styled(Icon.ThinArrow)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledLink = styled.a<{ sortable?: Props['sortable'] }>`
  text-decoration: none;
  color: inherit;
  width: 100%;
  cursor: ${p => (p.sortable ? 'pointer' : 'default')};
`;

const SortIcon: React.FC<{ sortOrder: SortOrder }> = ({ sortOrder }) => {
  if (sortOrder === 'descending') {
    return <StyledIconThinArrow inline direction="up" size={2} color={t => t.color.text} />;
  }

  if (sortOrder === 'ascending') {
    return <StyledIconThinArrow inline direction="down" size={2} color={t => t.color.text} />;
  }

  return <StyledIconChevronDown inline size={2} color={t => t.color.label} />;
};

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

export const Header: React.FC<Props> = props => {
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

  return (
    <Flexbox
      className={className}
      role="columnheader"
      {...ariaSorted}
      {...cellFlexProps || columnState.flexProps}
    >
      {isElement(children) ? (
        children
      ) : (
        <StyledLink
          href="#"
          role="button"
          onClick={e => {
            e.preventDefault();
            onSortClick();
          }}
          sortable={sortable}
        >
          <TextWrapper fontSize={fontSize} density={density} sorted={!R.isNil(sortOrder)}>
            {children}
          </TextWrapper>
          {sortable && sortOrder && <SortIcon sortOrder={sortOrder} />}
        </StyledLink>
      )}
    </Flexbox>
  );
};
