import React, { useState } from 'react';
import {
  StyledTable,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTHead,
  StyledTr,
  ExpandableRow,
} from './components';
import { GridTableComponent, GridTableComponents } from './GridTable.types';

const convertColumnSizes = (columnSizes: string[]) => columnSizes.join(' ');

const getColumnCount = (children) => {
  if ((Array.isArray(children) ? children[0].type.target : children.type.target) === 'tr') {
    return children.props.children.length;
  }
  return Array.isArray(children)
    ? getColumnCount(children[0].props.children)
    : getColumnCount(children.props.children);
};

const GridTable: GridTableComponent & GridTableComponents = ({
  children,
  // minCellWidth,
  initialColumnSizes,
}) => {
  const columnCount = getColumnCount(children);
  const [columnSizes] = useState(initialColumnSizes || Array(columnCount).fill('1fr'));

  // const { tableRef, headerWithRefs, ResizeHandle } = useColumnResize(
  //   headers,
  //   setColumnSizes,
  //   minCellWidth,
  // );

  return (
    <StyledTable
      // ref={tableRef}
      $columnSizes={convertColumnSizes(columnSizes)}
    >
      {children}
    </StyledTable>
  );
};

export default GridTable;

GridTable.THead = StyledTHead;
GridTable.Th = StyledTh;
GridTable.TBody = StyledTBody;
GridTable.Tr = StyledTr;
GridTable.Td = StyledTd;
GridTable.ExpandableRow = ExpandableRow;
