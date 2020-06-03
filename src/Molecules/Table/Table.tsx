import React from 'react';
import { Row } from './Row';
import { Header } from './Header';
import { RowGroup } from './RowGroup';
import { constants } from './shared';
import { Props, TableComponents } from './Table.types';

const Table: React.FC<Props> & TableComponents = ({ className, children, ...htmlProps }) => (
  <div className={className} role="table" {...htmlProps}>
    {children}
  </div>
);

Table.Row = Row;
Table.RowGroup = RowGroup;
Table.Header = Header;
Table.CONSTANTS = constants;

export default Table;
