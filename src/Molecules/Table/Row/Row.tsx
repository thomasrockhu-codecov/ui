import React from 'react';
import styled from 'styled-components';
import { RowComponent, Size } from './Row.types';
import { Box } from '../../../index';

const getPaddingSize = (size: Size) => {
  switch (size) {
    case 's':
      return 0;
    case 'm':
      return 1;
    case 'l':
      return 2;
    default:
      return 1;
  }
};

const StyledRow = styled('div').withConfig({
  shouldForwardProp: prop => !['hideBorder', 'expanded'].includes(prop),
})<{ hideBorder: boolean; expanded: boolean }>`
  ${p => (!p.hideBorder && !p.expanded ? `border-bottom: 1px solid ${p.theme.color.divider}` : '')};

  padding-right: ${p => p.theme.spacing.unit(2)}px;
  padding-left: ${p => p.theme.spacing.unit(1.5)}px;
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid
    ${p => (p.expanded ? p.theme.color.cta : 'transparent')};

  &:hover {
    background: ${p => p.theme.color.tableRowHover};
  }
`;

const ExpandedContent = styled('div')``;

export const Row: RowComponent = ({
  className,
  expanded = false,
  expandable = false,
  size = 'm',
  hideBorder = false,
  children,
}) => {
  const ariaExpanded = expandable ? { 'aria-expanded': expanded } : {};
  return (
    <StyledRow
      className={className}
      hideBorder={hideBorder}
      role="row"
      expanded={expanded}
      {...ariaExpanded}
    >
      <Box py={getPaddingSize(size)}>{children}</Box>
      {expandable && expanded && (
        <ExpandedContent>
          <Box px={3} pb={2}>
            Expanded content
          </Box>
        </ExpandedContent>
      )}
    </StyledRow>
  );
};
