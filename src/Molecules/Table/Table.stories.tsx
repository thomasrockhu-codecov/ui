import React, { useState } from 'react';
import Table from './Table';
import { Button } from '../../index';

export default {
  title: 'Molecules | Table',
  parameters: {
    component: Table,
  },
};

export const TableWithDifferentRows = () => (
  <Table>
    <Table.Row>Default</Table.Row>
    <Table.Row hideBorder>Border bottom hidden</Table.Row>
    <Table.Row size="l">Large</Table.Row>
    <Table.Row size="m">Medium</Table.Row>
    <Table.Row size="s">Small</Table.Row>
  </Table>
);

export const TableExpanded = () => {
  const TableExpandedExample = () => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Table>
        <Table.Row>Default</Table.Row>
        <Table.Row expanded={expanded} expandableContent={<div>I am expanded</div>}>
          <Button variant="secondary" size="s" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Collapse' : 'Expand'}
          </Button>
        </Table.Row>
        <Table.Row>Default</Table.Row>
        <Table.Row>Default</Table.Row>
      </Table>
    );
  };
  return <TableExpandedExample />;
};
