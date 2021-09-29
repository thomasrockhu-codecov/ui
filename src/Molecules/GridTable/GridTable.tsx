import React, { useState } from 'react';
import {
  StyledTable,
  StyledTBody,
  // StyledTd,
  // StyledTh,
  StyledTHead,
  StyledTr,
  ExpandableRow,
} from './components';
import { GridTh, GridTd } from './components/TableComponents/TabelComponents';
import { GridTableComponent, GridTableComponents, ColumnConfig } from './GridTable.types';

export const ColumnsContext = React.createContext<ColumnConfig[] | undefined>(undefined);

const convertColumnSizes = (columnSizes: string[]) => columnSizes.filter((size) => size).join(' ');

const getColumnCount: (children: any) => number = (children) => {
  if ((Array.isArray(children) ? children[0].type.target : children.type.target) === 'tr') {
    return children.props.children.length;
  }
  return Array.isArray(children)
    ? getColumnCount(children[0].props.children)
    : getColumnCount(children.props.children);
};

export const GridTable: GridTableComponent & GridTableComponents = ({
  children,
  columnsConfig,
}) => {
  const columnCount = getColumnCount(children);
  const columnSizesFromConfig = columnsConfig?.map((column) =>
    column.hidden ? null : column.width,
  );

  const [columnSizes] = useState(columnSizesFromConfig || Array(columnCount).fill('1fr'));

  return (
    <StyledTable $columnSizes={convertColumnSizes(columnSizes)}>
      <ColumnsContext.Provider value={columnsConfig}>{children}</ColumnsContext.Provider>
    </StyledTable>
  );
};

GridTable.THead = StyledTHead;
GridTable.Th = GridTh;
GridTable.TBody = StyledTBody;
GridTable.Tr = StyledTr;
GridTable.Td = GridTd;
GridTable.ExpandableRow = ExpandableRow;
