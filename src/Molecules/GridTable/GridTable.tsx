import React from 'react';
import { Header, Row } from './GridTable.types';

type GridTableProp = { headers: Header[]; rows: Row[] };

const GridTable: React.FC<GridTableProp> = ({ headers, rows }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            <td>{row}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridTable;
