import React from 'react';
import { Row } from './Row';
import { Props, TableComponents } from './Table.types';

const Table: React.FC<Props> & TableComponents = ({ children }) => (
  <div role="table">{children}</div>
);

Table.Row = Row;

export default Table;
