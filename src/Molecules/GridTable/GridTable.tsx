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

  initialColumnSizes,
}) => {
  const columnCount = getColumnCount(children);
  const [columnSizes] = useState(initialColumnSizes || Array(columnCount).fill('1fr'));

  return <StyledTable $columnSizes={convertColumnSizes(columnSizes)}>{children}</StyledTable>;
};

GridTable.THead = StyledTHead;
GridTable.Th = StyledTh;
GridTable.TBody = StyledTBody;
GridTable.Tr = StyledTr;
GridTable.Td = StyledTd;
GridTable.ExpandableRow = ExpandableRow;
