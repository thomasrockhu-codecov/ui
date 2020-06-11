import React from 'react';
import { Row } from './Row';
import { Header } from './Header';
import { Cell } from './Cell';
import { constants, ColumnProvider } from './shared';
import { Props, FlexTableComponents } from './FlexTable.types';

const FlexTable: React.FC<Props> & FlexTableComponents = ({
  className,
  children,
  ...htmlProps
}) => (
  <div className={className} role="table" {...htmlProps}>
    <ColumnProvider>{children}</ColumnProvider>
  </div>
);

FlexTable.Row = Row;
FlexTable.Header = Header;
FlexTable.Cell = Cell;
FlexTable.CONSTANTS = constants;

export default FlexTable;
