import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import { Button, Typography } from '../../index';

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

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.background};
`;

const StyledTable = styled(Table)`
  background-color: white;
  margin-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

export const TablesWithDifferentDensities = () => (
  <StyledDiv>
    <Typography type="title3">Default</Typography>

    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header name="Heade 1">Header 1</Table.Header>
          <Table.Header name="Heade 2">Header 2</Table.Header>
          <Table.Header name="Heade 3">Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Small</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row density="s">
          <Table.Header name="Heade 1">Header 1</Table.Header>
          <Table.Header name="Heade 2">Header 2</Table.Header>
          <Table.Header name="Heade 3">Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Medium</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row density="m">
          <Table.Header name="Heade 1">Header 1</Table.Header>
          <Table.Header name="Heade 2">Header 2</Table.Header>
          <Table.Header name="Heade 3">Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Large</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row density="l">
          <Table.Header name="Heade 1">Header 1</Table.Header>
          <Table.Header name="Heade 2">Header 2</Table.Header>
          <Table.Header name="Heade 3">Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>
  </StyledDiv>
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
          Table header 1 flex 1
        </Table.Header>
        <Table.Header name="TableHeader2" flex="3">
          Table header 2 flex 3
        </Table.Header>
        <Table.Header name="TableHeader3">Table header 3 no flex</Table.Header>
        <Table.Header name="TableHeader3">
          <Typography type="title2">I`&apos`m a component</Typography>
        </Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);
