import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../..';
import { SortOrder } from './HeaderContent.types';
import { SORT_ORDER_NONE } from '../../shared/constants';

const StyledIconChevronDown = styled(Icon.ChevronDown)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledIconSortArrow = styled(Icon.SortArrow)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

export const SortIcon: React.FC<{ sortOrder: NonNullable<SortOrder> }> = ({ sortOrder }) => {
  if (sortOrder === SORT_ORDER_NONE) {
    return <StyledIconChevronDown inline size={2} color={t => t.color.label} />;
  }

  return <StyledIconSortArrow inline direction={sortOrder} size={2} color={t => t.color.text} />;
};
