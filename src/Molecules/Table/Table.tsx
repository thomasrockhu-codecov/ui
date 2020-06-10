import React from 'react';
import { Row } from './Row';
import { Header } from './Header';
import { constants, ColumnProvider } from './shared';
import { Props, TableComponents } from './Table.types';

const Table: React.FC<Props> & TableComponents = ({ className, children, ...htmlProps }) => (
  <div className={className} role="table" {...htmlProps}>
    <ColumnProvider>{children}</ColumnProvider>
  </div>
);

Table.Row = Row;
Table.Header = Header;
Table.CONSTANTS = constants;

export default Table;
