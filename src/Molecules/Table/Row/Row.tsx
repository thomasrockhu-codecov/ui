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
  shouldForwardProp: prop => !['size'].includes(prop),
})<{ size: Size }>`
  padding-top: ${p => p.theme.spacing.unit(getPaddingSize(p.size))}px;
  padding-bottom: ${p => p.theme.spacing.unit(getPaddingSize(p.size))}px;
`;

export const Row: RowComponent = ({ size = 'm', children }) => (
  <StyledRow size={size} role="row">
    {children}
  </StyledRow>
);
