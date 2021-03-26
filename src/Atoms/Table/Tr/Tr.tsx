import React from 'react';
import styled from 'styled-components';
import { Props, TrComponent } from './Tr.types';

const StyledTr = styled.tr<Props>`
  height: 100%;
  padding: ${(p) => p.theme.spacing.unit(2)}px 0;
  :not(:first-child) {
    border-top: 1px solid ${(p) => p.theme.color.divider};
  }
  overflow: 'hidden';
`;

export const Tr: TrComponent = ({ textAlign = 'left', children, className, onClick }) => (
  <StyledTr textAlign={textAlign} className={className} onClick={onClick}>
    {children}
  </StyledTr>
);
