import React from 'react';
import { HeaderRow, Row } from './Row';
import { Header } from './Header';
import { Cell } from './Cell';
import { constants, ColumnProvider } from './shared';
import { Props, FlexTableComponents } from './FlexTable.types';
import { Density } from './shared/shared.types';

export type TableState = {
  density: Density;
};

const TableContext = React.createContext<TableState | undefined>(undefined);

const FlexTable: React.FC<Props> & FlexTableComponents = ({
  className,
  density = 'm',
  children,
  ...htmlProps
}) => (
  <TableContext.Provider value={{ density }}>
    <div className={className} role="table" {...htmlProps}>
      <ColumnProvider>{children}</ColumnProvider>
    </div>
  </TableContext.Provider>
);

FlexTable.Row = Row;
FlexTable.HeaderRow = HeaderRow;
FlexTable.Header = Header;
FlexTable.Cell = Cell;
FlexTable.CONSTANTS = constants;

export default FlexTable;
