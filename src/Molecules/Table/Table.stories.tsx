import React from 'react';
import Table from './Table';

export default {
  title: 'Molecules | Table',
  parameters: {
    component: Table,
  },
};

export const tableWithDifferentRows = () => (
  <Table>
    <Table.Row>Default</Table.Row>
    <Table.Row hideBorder>Border bottom hidden</Table.Row>
    <Table.Row size="l">Large</Table.Row>
    <Table.Row size="m">Medium</Table.Row>
    <Table.Row size="s">Small</Table.Row>
  </Table>
);

export const tableExpanded = () => (
  <Table>
    <Table.Row>Default</Table.Row>
    <Table.Row expandable expanded>Expandable</Table.Row>
    <Table.Row>Default</Table.Row>
    <Table.Row>Default</Table.Row>
  </Table>
);