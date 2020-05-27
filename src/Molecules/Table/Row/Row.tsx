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
  shouldForwardProp: prop => !['size', ''].includes(prop),
})<{ size: Size; hideBorder: boolean }>`
  padding-top: ${p => p.theme.spacing.unit(getPaddingSize(p.size))}px;
  padding-bottom: ${p => p.theme.spacing.unit(getPaddingSize(p.size))}px;
  ${p => (!p.hideBorder ? `border-bottom: 1px solid ${p.theme.color.divider}` : '')};

  &:hover {
    background: ${p => p.theme.color.tableRowHover};
  }
`;

export const Row: RowComponent = ({ size = 'm', hideBorder = false, children }) => (
  <StyledRow size={size} hideBorder={hideBorder} role="row">
    {children}
  </StyledRow>
);
