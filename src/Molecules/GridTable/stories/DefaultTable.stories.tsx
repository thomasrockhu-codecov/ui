import React from 'react';
import GridTableComponent from '../GridTable';
import { generateTableData, defaultHeaders, defaultRows } from './storyData';

export default {
  title: 'Molecules / GridTable / Default Table',
  parameters: {
    component: GridTableComponent,
  },
};

export const DefaultStuff = () => {
  const Story = () => {
    return (
      <GridTableComponent
        headers={defaultHeaders}
        rows={defaultRows}
        minCellWidth={100}
        initialColumnSizes={['50px', '1fr', '1fr', '1fr']}
      />
    );
  };

  return <Story />;
};

export const BigTable = () => {
  const { headers: bigTableHeaders, rows: bigTableRows } = generateTableData(20, 5);

  const Story = () => {
    return <GridTableComponent headers={bigTableHeaders} rows={bigTableRows} minCellWidth={100} />;
  };

  return <Story />;
};
