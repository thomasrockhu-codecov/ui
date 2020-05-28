import React from 'react';
import styled from 'styled-components';
import { RowComponent, Size } from './Row.types';

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
  shouldForwardProp: prop => !['size', 'hideBorder', 'expanded', ''].includes(prop),
})<{ size: Size; hideBorder: boolean; expanded: boolean; }>`
  padding-top: ${p => p.theme.spacing.unit(getPaddingSize(p.size))}px;
  padding-bottom: ${p => p.theme.spacing.unit(getPaddingSize(p.size))}px;
  ${p => (!p.hideBorder ? `border-bottom: 1px solid ${p.theme.color.divider}` : '')};

  border-left: ${p => p.theme.spacing.unit(0.5)} solid ${p => p.expanded ? p.theme.color.cta : 'transparent'};

  &:hover {
    background: ${p => p.theme.color.tableRowHover};
  }
  
`;

const ExpandedContent = styled('div')`
  
`;

export const Row: RowComponent = ({
  className,
  expanded = false,
  expandable = false,
  size = 'm',
  hideBorder = false,
  children,
}) => {
  return (
    <StyledRow className={className} size={size} hideBorder={hideBorder} role="row" expanded={expanded} aria-expanded={expanded}>
      {children}
      {expandable && <div>Expanded</div>}
    </StyledRow>
  );
};
