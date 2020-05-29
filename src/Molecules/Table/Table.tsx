import React from 'react';
import { Row } from './Row';
import { Props, TableComponents } from './Table.types';

const Table: React.FC<Props> & TableComponents = ({ className, children, ...htmlProps }) => (
  <div className={className} role="table" {...htmlProps}>
    {children}
  </div>
);

Table.Row = Row;

export default Table;
