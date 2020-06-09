import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../..';
import { SortOrder } from './HeaderContent.types';

const StyledIconChevronDown = styled(Icon.ChevronDown)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

const StyledIconThinArrow = styled(Icon.ThinArrow)`
  margin-left: ${p => p.theme.spacing.unit(1)}px;
`;

export const SortIcon: React.FC<{ sortOrder: SortOrder }> = ({ sortOrder }) => {
  if (sortOrder === 'descending') {
    return <StyledIconThinArrow inline direction="up" size={2} color={t => t.color.text} />;
  }

  if (sortOrder === 'ascending') {
    return <StyledIconThinArrow inline direction="down" size={2} color={t => t.color.text} />;
  }

  return <StyledIconChevronDown inline size={2} color={t => t.color.label} />;
};
