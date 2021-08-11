import React from 'react';
import styled from 'styled-components';
import { Props, TableComponent } from './Table.types';

const StyledTable = styled.table<Props>`
  width: ${(p) => p.width};
  table-layout: ${(p) => (p.tableLayout ? 'fixed' : 'auto')};
  border-collapse: collapse;
  color: ${(p) => p.theme.color.text};
`;

export const Table: TableComponent = ({ children, tableLayout = 'fixed', width = '100%' }) => (
  <StyledTable tableLayout={tableLayout} width={width}>
    {children}
  </StyledTable>
);

export default Table;
