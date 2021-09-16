import React from 'react';
import GridTable from '../GridTable';

export default {
  title: 'Molecules / GridTable / Default Table',
  parameters: {
    component: GridTable,
    // docs: {
    //   page: docs,
    // },
  },
};

export const DefaultStuff = () => {
  const Story = () => {
    return <GridTable />;
  };

  return <Story />;
};
