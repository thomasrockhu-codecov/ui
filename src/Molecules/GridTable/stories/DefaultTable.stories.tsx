import React from 'react';
import { Button, Development, Link, Typography } from '../../..';
import GridTableComponent from '../GridTable';
import { Header, Row } from '../GridTable.types';

export default {
  title: 'Molecules / GridTable / Default Table',
  parameters: {
    component: GridTableComponent,
    // docs: {
    //   page: docs,
    // },
  },
};

const headers: Header[] = [
  { title: null, columnId: 'button' },
  { title: <Typography weight="bold">Instrument</Typography>, columnId: 'instrument' },
  { title: <Typography weight="bold">Development</Typography>, columnId: 'development' },
  { title: <Typography weight="bold">Comment</Typography>, columnId: 'Comment' },
];

const rows: Row[] = [
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
  },
];

export const DefaultStuff = () => {
  const Story = () => {
    return <GridTableComponent headers={headers} rows={rows} minCellWidth={100} />;
  };

  return <Story />;
};
