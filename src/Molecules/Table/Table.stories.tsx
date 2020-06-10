import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import { Button, Typography, Flag } from '../..';
import { SortOrder } from './Header/HeaderContent/HeaderContent.types';
import { OnSort } from './Header/Header.types';

export default {
  title: 'Molecules | Table',
  parameters: {
    component: Table,
  },
};

export const DefaultTable = () => (
  <Table>
    <Table.Row separatorColor={t => t.color.backgroundBlack}>
      <Table.Header columnId="column1">Header 1</Table.Header>
      <Table.Header columnId="column2">Header 2</Table.Header>
      <Table.Header columnId="column3">Header 3</Table.Header>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 1-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 1-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 1-3</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 2-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 2-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 2-3</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 3-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 3-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 3-3</Table.Cell>
    </Table.Row>
  </Table>
);

export const TruncatedCellContent = () => (
  <Table>
    <Table.Row separatorColor={t => t.color.backgroundBlack}>
      <Table.Header flex="1" columnId="column1">
        Flex 1
      </Table.Header>
      <Table.Header flex="0 15%" columnId="column2">
        Fifteen percent
      </Table.Header>
      <Table.Header flex="0 100px" columnId="column3">
        Loooooooooooooong header set width
      </Table.Header>
      <Table.Header columnId="column4">Default</Table.Header>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 1-1</Table.Cell>
      <Table.Cell columnId="column2">
        Very long cell content that should be truncated or ellipsized depepending on your language
        preferences
      </Table.Cell>
      <Table.Cell columnId="column3">Cell 1-3</Table.Cell>
      <Table.Cell columnId="column4">Cell 1-4</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 2-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 2-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 2-3</Table.Cell>
      <Table.Cell columnId="column4">Cell 2-4</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 3-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 3-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 3-3</Table.Cell>
      <Table.Cell columnId="column4">Cell 3-4</Table.Cell>
    </Table.Row>
  </Table>
);

export const DifferentAlignmentsTable = () => (
  <Table>
    <Table.Row separatorColor={t => t.color.backgroundBlack}>
      <Table.Header columnId="column1">Left</Table.Header>
      <Table.Header columnId="column2" justifyContent="flex-end">
        Right
      </Table.Header>
      <Table.Header columnId="column3" justifyContent="flex-end">
        Right
      </Table.Header>
      <Table.Header columnId="column4" justifyContent="center">
        Center
      </Table.Header>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 1-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 1-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 1-3</Table.Cell>
      <Table.Cell columnId="column4">Cell 1-4</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 2-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 2-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 2-3</Table.Cell>
      <Table.Cell columnId="column4">Cell 2-4</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell columnId="column1">Cell 3-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 3-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 3-3</Table.Cell>
      <Table.Cell columnId="column4">Cell 3-4</Table.Cell>
    </Table.Row>
  </Table>
);

export const TableWithoutSeparators = () => (
  <Table>
    <Table.Row separatorColor={t => t.color.backgroundBlack}>
      <Table.Header columnId="column1">Header 1</Table.Header>
      <Table.Header columnId="column2">Header 2</Table.Header>
      <Table.Header columnId="column3">Header 3</Table.Header>
    </Table.Row>
    <Table.Row hideSeparator>
      <Table.Cell columnId="column1">Cell 1-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 1-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 1-3</Table.Cell>
    </Table.Row>
    <Table.Row hideSeparator>
      <Table.Cell columnId="column1">Cell 2-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 2-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 2-3</Table.Cell>
    </Table.Row>
    <Table.Row hideSeparator>
      <Table.Cell columnId="column1">Cell 3-1</Table.Cell>
      <Table.Cell columnId="column2">Cell 3-2</Table.Cell>
      <Table.Cell columnId="column3">Cell 3-3</Table.Cell>
    </Table.Row>
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
      <Table.Row>
        <Table.Header columnId="column1">Header 1</Table.Header>
        <Table.Header columnId="column2">Header 2</Table.Header>
        <Table.Header columnId="column3">Header 3</Table.Header>
      </Table.Row>
    </StyledTable>

    <Typography type="title3">Small</Typography>
    <StyledTable>
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
    </StyledTable>

    <Typography type="title3">Medium</Typography>
    <StyledTable>
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
    </StyledTable>

    <Typography type="title3">Large</Typography>
    <StyledTable>
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
    </StyledTable>
  </StyledDiv>
);

export const TableWithDifferentRows = () => (
  <Table>
    <Table.Row separatorColor={t => t.color.text}>Separator color set</Table.Row>
    <Table.Row>Default</Table.Row>
    <Table.Row hideSeparator>Separator hidden</Table.Row>
    <Table.Row>Default</Table.Row>
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

export const TableHeader = () => {
  const CustomisedTableHeader: React.FC = ({ children }) => (
    <Table.Header columnId="column3" sortable>
      {({ sortable, sorted, fontSize, density, onSortClick, sortOrder }) => (
        <Table.Header.SortButton onClick={onSortClick}>
          <Flag country="SE" inline height={3} />
          <Table.Header.TextWrapper fontSize={fontSize} density={density} sorted={sorted}>
            {children}
          </Table.Header.TextWrapper>
          {sortable && <Table.Header.SortIcon sortOrder={sortOrder} />}
        </Table.Header.SortButton>
      )}
    </Table.Header>
  );
  return (
    <Table>
      <Table.Row>
        <Table.Header columnId="column1" flex="1">
          Table header 1 flex 1
        </Table.Header>
        <Table.Header columnId="column2" flex="3">
          Table header 2 flex 3
        </Table.Header>
        <CustomisedTableHeader>Customised header</CustomisedTableHeader>
        <Table.Header columnId="column4">Table header 3 no flex</Table.Header>
        <Table.Header columnId="column5">
          <Typography type="title2">I&apos;m a component</Typography>
        </Table.Header>
      </Table.Row>
    </Table>
  );
};

export const SortableHeadersUncontrolled = () => (
  <Table>
    <Table.Row>
      <Table.Header columnId="column1" sortable>
        Uncontrolled 1
      </Table.Header>
      <Table.Header columnId="column2" sortable>
        Uncontrolled 2
      </Table.Header>
      <Table.Header
        columnId="column3"
        sortable
        initialSortOrder={Table.CONSTANTS.SORT_ORDER_DESCENDING}
      >
        With initial sort order
      </Table.Header>
      <Table.Header columnId="column4" sortable={false}>
        Non sortable
      </Table.Header>
    </Table.Row>
  </Table>
);

// For useState to work in storybook, components needs to be wrapped in a new function
export const SortableHeaderControlled = () => {
  const ReactComponent = () => {
    const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
      columnId: 'column1',
      sortOrder: Table.CONSTANTS.SORT_ORDER_NONE,
    });

    const getSort = (columnId: string) =>
      columnSort.columnId === columnId ? columnSort.sortOrder : Table.CONSTANTS.SORT_ORDER_NONE;
    const onSort: OnSort = (columnId, nextSortOrder) =>
      setColumnSort({ columnId, sortOrder: nextSortOrder });

    return (
      <Table>
        <Table.Row>
          <Table.Header columnId="column1" sortable sortOrder={getSort('column1')} onSort={onSort}>
            Controlled1
          </Table.Header>
          <Table.Header columnId="column2" sortable sortOrder={getSort('column2')} onSort={onSort}>
            Controlled2
          </Table.Header>
          <Table.Header columnId="column3" sortable={false}>
            Not sortable
          </Table.Header>
          <Table.Header columnId="column4" sortable sortOrder={getSort('column4')} onSort={onSort}>
            Controlled3
          </Table.Header>
        </Table.Row>
      </Table>
    );
  };
  return <ReactComponent />;
};

export const SortableHeaderOnlyAscendingDescending = () => {
  const ReactComponent = () => {
    const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
      columnId: 'column1',
      sortOrder: Table.CONSTANTS.SORT_ORDER_ASCENDING,
    });

    const getSort = (columnId: string) =>
      columnSort.columnId === columnId ? columnSort.sortOrder : Table.CONSTANTS.SORT_ORDER_NONE;
    const onSort: OnSort = columnId => {
      let nextSortOrder: SortOrder = Table.CONSTANTS.SORT_ORDER_ASCENDING;
      const sameAsCurrentlySorted = columnId === columnSort.columnId;
      if (sameAsCurrentlySorted) {
        nextSortOrder =
          columnSort.sortOrder === Table.CONSTANTS.SORT_ORDER_ASCENDING
            ? Table.CONSTANTS.SORT_ORDER_DESCENDING
            : Table.CONSTANTS.SORT_ORDER_ASCENDING;
      }
      setColumnSort({ columnId, sortOrder: nextSortOrder });
    };

    return (
      <Table>
        <Table.Row>
          <Table.Header columnId="column1" sortable sortOrder={getSort('column1')} onSort={onSort}>
            Controlled1
          </Table.Header>
          <Table.Header columnId="column2" sortable sortOrder={getSort('column2')} onSort={onSort}>
            Controlled2
          </Table.Header>
          <Table.Header columnId="column3" sortable={false}>
            Not sortable
          </Table.Header>
          <Table.Header columnId="column4" sortable sortOrder={getSort('column4')} onSort={onSort}>
            Controlled3
          </Table.Header>
        </Table.Row>
      </Table>
    );
  };
  return <ReactComponent />;
};

// TODO: add story to how you create a custom sorting header and variations thereof
