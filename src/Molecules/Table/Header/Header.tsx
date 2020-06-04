import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import R from 'ramda';
import { Props, SortStates } from './Header.types';
import { isElement } from '../../../common/utils';
import { Flexbox, Icon } from '../../..';
import { TextWrapper } from './TextWrapper';

const StyledIconChevronDown = styled(Icon.ChevronDown)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledIconThinArrow = styled(Icon.ThinArrow)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

const SortIcon: React.FC<{ sortable: boolean; sortOrder: SortStates }> = ({
  sortable,
  sortOrder,
}) => {
  if (!sortable) {
    return null;
  }

  if (sortOrder === 'descending') {
    return <StyledIconThinArrow inline direction="down" size={2} color={t => t.color.text} />;
  }

  if (sortOrder === 'ascending') {
    return <StyledIconThinArrow inline direction="up" size={2} color={t => t.color.text} />;
  }

  return <StyledIconChevronDown inline size={2} color={t => t.color.label} />;
};

export const Header: React.FC<Props> = ({
  children,
  className,
  container = true,
  defaultSortOrder = null,
  density = 'm',
  flex = '1',
  fontSize = 'm',
  grow,
  item = true,
  order,
  shrink,
  sortable = false,
  sortOrder: sortOrderProp,
  onSort = () => {},
  wrap = 'nowrap',
  ...flexBoxProps
}) => {
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  const ariaSorted = sortable ? { 'aria-sort': sortOrder || 'none' } : {};

  const controlledSort = sortOrderProp !== undefined;
  useEffect(() => {
    if (controlledSort) {
      // @ts-ignore
      setSortOrder(sortOrderProp);
    }
  }, [sortOrderProp, setSortOrder, controlledSort]);

  const onSortClick = () => {
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
    onSort(newSortOrder);
    if (!controlledSort) {
      setSortOrder(newSortOrder);
    }
  };

  return (
    <Flexbox
      container={container}
      flex={flex}
      grow={grow}
      item={item}
      order={order}
      shrink={shrink}
      wrap={wrap}
      className={className}
      role="columnheader"
      {...ariaSorted}
      {...flexBoxProps}
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
