import React from 'react';
import { HeaderRow, Row } from './Row';
import { Header, IconHeader } from './Header';
import { Cell } from './Cell';
import { constants, ColumnProvider } from './shared';
import { Props, FlexTableComponents } from './FlexTable.types';
import { FlexTableProvider } from './shared/FlexTableProvider';

const FlexTable: React.FC<Props> & FlexTableComponents = ({
  className,
  density = 'm',
  children,
  ...htmlProps
}) => (
  <FlexTableProvider density={density}>
    <div className={className} role="table" {...htmlProps}>
      <ColumnProvider>{children}</ColumnProvider>
    </div>
  </FlexTableProvider>
);

FlexTable.Row = Row;
FlexTable.HeaderRow = HeaderRow;
FlexTable.Header = Header;
FlexTable.IconHeader = IconHeader;
FlexTable.Cell = Cell;
FlexTable.CONSTANTS = constants;

export default FlexTable;
