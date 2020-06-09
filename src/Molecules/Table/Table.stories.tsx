import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import { Button, Typography } from '../../index';
import { SortOrder } from './Header/HeaderContent/HeaderContent.types';

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
        <Table.Header columnId="column1">Header 1</Table.Header>
        <Table.Header columnId="column2">Header 2</Table.Header>
        <Table.Header columnId="column3">Header 3</Table.Header>
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
    <Typography type="title3">Default (Medium)</Typography>

    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header columnId="column1">Header 1</Table.Header>
          <Table.Header columnId="column2">Header 2</Table.Header>
          <Table.Header columnId="column3">Header 3</Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Small</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header columnId="column1" density="s">
            Header 1
          </Table.Header>
          <Table.Header columnId="column2" density="s">
            Header 2
          </Table.Header>
          <Table.Header columnId="column3" density="s">
            Header 3
          </Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Medium</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header columnId="column1" density="m">
            Header 1
          </Table.Header>
          <Table.Header columnId="column2" density="m">
            Header 2
          </Table.Header>
          <Table.Header columnId="column3" density="m">
            Header 3
          </Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>

    <Typography type="title3">Large</Typography>
    <StyledTable>
      <Table.RowGroup>
        <Table.Row>
          <Table.Header columnId="column1" density="l">
            Header 1
          </Table.Header>
          <Table.Header columnId="column2" density="l">
            Header 2
          </Table.Header>
          <Table.Header columnId="column3" density="l">
            Header 3
          </Table.Header>
        </Table.Row>
      </Table.RowGroup>
    </StyledTable>
  </StyledDiv>
);

export const TableWithDifferentRows = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row separatorColor={t => t.color.text}>Separator color set</Table.Row>
      <Table.Row>Default</Table.Row>
      <Table.Row hideSeparator>Separator hidden</Table.Row>
      <Table.Row>Default</Table.Row>
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
    <Table.Row>
      <Table.Header columnId="column1" flex="1">
        Table header 1 flex 1
      </Table.Header>
      <Table.Header columnId="column2" flex="3">
        Table header 2 flex 3
      </Table.Header>
      <Table.Header columnId="column3">Table header 3 no flex</Table.Header>
      <Table.Header columnId="column4">
        <Typography type="title2">I&apos;m a component</Typography>
      </Table.Header>
    </Table.Row>
  </Table>
);

export const SortableHeadersUncontrolled = () => (
  <Table>
    <Table.RowGroup>
      <Table.Row>
        <Table.Header columnId="column1" sortable>
          Ticker
        </Table.Header>
        <Table.Header columnId="column2" sortable>
          Instrument name
        </Table.Header>
        <Table.Header columnId="column3" sortable={false}>
          Country
        </Table.Header>
        <Table.Header columnId="column4" sortable>
          Yield
        </Table.Header>
      </Table.Row>
    </Table.RowGroup>
  </Table>
);

// For useState to work in storybook, components needs to be wrapped in a new function
export const SortableHeaderControlled = () => {
  const ReactComponent = () => {
    const [column1Sort, setColumn1Sort] = useState<SortOrder>(Table.CONSTANTS.SORT_ORDER_NONE);
    const [column2Sort, setColumn2Sort] = useState<SortOrder>(Table.CONSTANTS.SORT_ORDER_ASCENDING);
    const [column6Sort, setColumn6Sort] = useState<SortOrder>(
      Table.CONSTANTS.SORT_ORDER_DESCENDING,
    );

    return (
      <Table>
        <Table.RowGroup>
          <Table.Row>
            <Table.Header
              columnId="column1"
              sortable
              sortOrder={column1Sort}
              onSort={(sortOrder: SortOrder) => setColumn1Sort(sortOrder)}
            >
              Controlled1
            </Table.Header>
            <Table.Header
              columnId="column2"
              sortable
              sortOrder={column2Sort}
              onSort={(sortOrder: SortOrder) => setColumn2Sort(sortOrder)}
            >
              Controlled2
            </Table.Header>
            <Table.Header columnId="column3" sortable={false}>
              Not sortable
            </Table.Header>
            <Table.Header columnId="column4" sortable>
              Uncontrolled
            </Table.Header>
            <Table.Header
              columnId="column5"
              sortable
              initialSortOrder={Table.CONSTANTS.SORT_ORDER_DESCENDING}
            >
              Uncontrolled with initial
            </Table.Header>
            <Table.Header
              columnId="column6"
              sortable
              sortOrder={column6Sort}
              onSort={(sortOrder: SortOrder) => setColumn6Sort(sortOrder)}
            >
              Controlled3
            </Table.Header>
          </Table.Row>
        </Table.RowGroup>
      </Table>
    );
  };
  return ReactComponent;
};

// TODO: add story to how you create a custom sorting header and variations thereof
