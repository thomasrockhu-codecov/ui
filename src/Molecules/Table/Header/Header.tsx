import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Props, SortOrder } from './Header.types';
import { isElement } from '../../../common/utils';
import { Flexbox, Icon } from '../../..';
import { TextWrapper } from './TextWrapper';
import { SORT_ORDER_ASCENDING, SORT_ORDER_DESCENDING, SORT_ORDER_NONE } from '../shared/constants';
import { useFlexCellProps, useColumn, ACTION_SET_FLEX_PROPS } from '../shared/ColumnProvider';

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

const SortIcon: React.FC<{ sortable: boolean; sortOrder: SortOrder }> = ({
  sortable,
  sortOrder,
}) => {
  if (!sortable) {
    return null;
  }

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

  const [sortOrder, setSortOrder] = useState<SortOrder>(initialSortOrder);
  const ariaSorted = sortable ? { 'aria-sort': sortOrder } : {};
  const [, columnDispatch] = useColumn(columnId);

  const cellFlexProps = useFlexCellProps(props);
  useEffect(() => {
    if (cellFlexProps) {
      columnDispatch({ type: ACTION_SET_FLEX_PROPS, flexProps: cellFlexProps });
    }
  }, [cellFlexProps, columnDispatch]);

  const controlledSort = sortOrderProp !== undefined;
  useEffect(() => {
    if (controlledSort) {
      // @ts-ignore
      setSortOrder(sortOrderProp);
    }
  }, [sortOrderProp, setSortOrder, controlledSort]);

  const onSortClick = () => {
    const newSortOrder = getNextSortOrder(sortOrder);
    onSort(newSortOrder);
    if (!controlledSort) {
      setSortOrder(newSortOrder);
    }
  };

  return (
    <Flexbox className={className} role="columnheader" {...ariaSorted} {...cellFlexProps}>
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
          <SortIcon sortable={sortable} sortOrder={sortOrder} />
        </StyledLink>
      )}
    </Flexbox>
  );
};
