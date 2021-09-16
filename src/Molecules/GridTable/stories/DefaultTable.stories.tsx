import React from 'react';
import GridTable from '../GridTable';
import { Header, Row } from '../GridTable.types';

export default {
  title: 'Molecules / GridTable / Default Table',
  parameters: {
    component: GridTable,
    // docs: {
    //   page: docs,
    // },
  },
};

const headers: Header[] = [
  { title: '', columnId: 'button' },
  { title: 'Instrument', columnId: 'instrument' },
  { title: 'Development', columnId: 'development' },
];

const rows: Row[] = [
  { button: 'btn', instrument: 'Mayo inc.', development: '200%' },
  { button: 'btn', instrument: 'Pickles AB', development: '-20%' },
  { button: 'btn', instrument: 'Butter Corp.', development: '15%' },
];

export const DefaultStuff = () => {
  const Story = () => {
    return <GridTable headers={headers} rows={rows} />;
  };

  return <Story />;
};
