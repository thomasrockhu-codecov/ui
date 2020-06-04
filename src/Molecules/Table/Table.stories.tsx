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
        <Table.Header>Header 1</Table.Header>
        <Table.Header>Header 2</Table.Header>
        <Table.Header>Header 3</Table.Header>
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
          <Table.Header>Header 1</Table.Header>
          <Table.Header>Header 2</Table.Header>
          <Table.Header>Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Small</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header>Header 1</Table.Header>
          <Table.Header>Header 2</Table.Header>
          <Table.Header>Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Medium</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header>Header 1</Table.Header>
          <Table.Header>Header 2</Table.Header>
          <Table.Header>Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Large</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header>Header 1</Table.Header>
          <Table.Header>Header 2</Table.Header>
          <Table.Header>Header 3</Table.Header>
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
      <Table.Row>Large</Table.Row>
      <Table.Row>Medium</Table.Row>
      <Table.Row>Small</Table.Row>
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
        <Table.Header flex="1">Table header 1 flex 1</Table.Header>
        <Table.Header flex="3">Table header 2 flex 3</Table.Header>
        <Table.Header>Table header 3 no flex</Table.Header>
        <Table.Header>
          <Typography type="title2">I&apos;m a component</Typography>
        </Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);

export const SortableHeaders = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row>
        <Table.Header sortable sortOrder="ascending">
          Header 1
        </Table.Header>
        <Table.Header sortable sortOrder="descending">
          Header 2
        </Table.Header>
        <Table.Header sortable>Header 3</Table.Header>
        <Table.Header sortable={false}>Header 4</Table.Header>
        <Table.Header sortable sortOrder="ascending">
          Header 4
        </Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);

// TODO: add story to how you create a custom sorting header and variations thereof
