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
        <Table.Header name="Heade 1">Header 1</Table.Header>
        <Table.Header name="Heade 2">Header 2</Table.Header>
        <Table.Header name="Heade 3">Header 3</Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);

export const TableWithDifferentRows = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row>Default</Table.Row>
      <Table.Row hideBorder>Border bottom hidden</Table.Row>
      <Table.Row density="l">Large</Table.Row>
      <Table.Row density="m">Medium</Table.Row>
      <Table.Row density="s">Small</Table.Row>
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

export const TableHeader = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row>
        <Table.Header name="TableHeader1" flex="1">
          Table header 1
        </Table.Header>
        <Table.Header name="TableHeader2" flex="3">
          Table header 2
        </Table.Header>
        <Table.Header name="TableHeader3">Table header 3</Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);
