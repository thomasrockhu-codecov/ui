import React from 'react';

import { Typography, Development, Link, Button } from '../../..';
import { Header, Row } from '../GridTable.types';

export const defaultRows: Row[] = [
  {
    button: <Button>Köp</Button>,
    instrument: (
      <Typography>
        <Link to="/">Mayo inc.</Link>
      </Typography>
    ),
    development: (
      <Typography>
        <Development percentage value={200} />
      </Typography>
    ),
    comment: <Typography>This is a comment</Typography>,
    expandItems: [
      'This is expand value 1',
      'This is expand value 2',
      'This is expand value 3',
      'This is expand value 4',
      'This is expand value 5',
    ],
  },
  {
    button: <Button>Köp</Button>,
    instrument: (
      <Typography>
        <Link to="/">Pickles AB</Link>
      </Typography>
    ),
    development: (
      <Typography>
        <Development percentage value={-20} />
      </Typography>
    ),
    comment: <Typography>This is a comment</Typography>,
    expandItems: [
      'This is expand value 1',
      'This is expand value 2',
      'This is expand value 3',
      'This is expand value 4',
      'This is expand value 5',
    ],
  },
  {
    button: <Button>Köp</Button>,
    instrument: (
      <Typography>
        <Link to="/">Marmalade(TM)</Link>
      </Typography>
    ),
    development: (
      <Typography>
        <Development percentage value={0} />
      </Typography>
    ),
    comment: <Typography>This is a comment</Typography>,
  },
  {
    button: <Button>Köp</Button>,
    instrument: (
      <Typography>
        <Link to="/">Butter Corp.</Link>
      </Typography>
    ),
    development: (
      <Typography>
        <Development percentage value={15} />
      </Typography>
    ),
    comment: <Typography>This is a comment</Typography>,
    expandItems: [
      'This is expand value 1',
      'This is expand value 2',
      'This is expand value 3',
      'This is expand value 4',
      'This is expand value 5',
    ],
  },
];

export const defaultHeaders: Header[] = [
  { title: null, columnId: 'button' },
  { title: <Typography weight="bold">Instrument</Typography>, columnId: 'instrument' },
  { title: <Typography weight="bold">Development</Typography>, columnId: 'development' },
  { title: <Typography weight="bold">Comment</Typography>, columnId: 'Comment' },
];

export const generateTableData = (rowsLength: number, columnsLength: number) => {
  const headers: Header[] = [...Array(columnsLength)].map((_, colIndex) => ({
    title: `col ${colIndex}`,
    columnId: `col_${colIndex}`,
  }));

  const rows: Row[] = [...Array(rowsLength)].map((_, rowIndex) =>
    headers.reduce(
      (row, { columnId }, colIndex) => ({ ...row, [columnId]: `cell ${rowIndex} - ${colIndex}` }),
      {},
    ),
  );
  return { headers, rows };
};
