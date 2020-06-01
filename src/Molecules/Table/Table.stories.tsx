import React, { useState } from 'react';
import Table from './Table';
import { Button } from '../../index';

export default {
  title: 'Molecules | Table',
  parameters: {
    component: Table,
  },
};

export const DefaultTable = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row>
        <Table.Header>Header 1</Table.Header>
        <Table.Header>Header 2</Table.Header>
        <Table.Header>Header 3</Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);

export const TableWithDifferentRows = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row>Default</Table.Row>
      <Table.Row hideBorder>Border bottom hidden</Table.Row>
      <Table.Row size="l">Large</Table.Row>
      <Table.Row size="m">Medium</Table.Row>
      <Table.Row size="s">Small</Table.Row>
    </Table.RowGroup>
  </Table>
);

export const TableExpanded = () => {
  const TableExpandedExample = () => {
    const [expanded, setExpanded] = useState(false);
    return (
      <Table>
        <Table.RowGroup>
          <Table.Row>Default</Table.Row>
          <Table.Row expanded={expanded} expandableContent={<div>I am expanded</div>}>
            <Button variant="secondary" size="s" onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Collapse' : 'Expand'}
            </Button>
          </Table.Row>
          <Table.Row>Default</Table.Row>
          <Table.Row>Default</Table.Row>
        </Table.RowGroup>
      </Table>
    );
  };
  return <TableExpandedExample />;
};
