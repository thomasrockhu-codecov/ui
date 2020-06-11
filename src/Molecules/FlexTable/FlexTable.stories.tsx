import React, { useState, useMemo } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { number, withKnobs } from '@storybook/addon-knobs';
import FlexTable from './FlexTable';
import { Button, Typography, Flag } from '../..';
import { SortOrder } from './Header/HeaderContent/HeaderContent.types';
import { OnSort } from './Header/Header.types';

export default {
  title: 'Molecules | FlexTable',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
  },
};

export const DefaultTable = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.backgroundBlack}>
      <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
      <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
      <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
    </FlexTable.Row>
  </FlexTable>
);

export const TableWithNonHiglightableRows = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.backgroundBlack}>
      <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
      <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
      <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row hoverHighlight={false}>
      <FlexTable.Cell columnId="column1">No highlight 2-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">No highlight 2-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">No highlight 2-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
    </FlexTable.Row>
  </FlexTable>
);

export const TruncatedCellContent = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.backgroundBlack}>
      <FlexTable.Header flex="1" columnId="column1">
        Flex 1
      </FlexTable.Header>
      <FlexTable.Header flex="0 15%" columnId="column2">
        Fifteen percent
      </FlexTable.Header>
      <FlexTable.Header flex="0 100px" columnId="column3">
        Loooooooooooooong header set width
      </FlexTable.Header>
      <FlexTable.Header columnId="column4">Default</FlexTable.Header>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">
        Very long cell content that should be truncated or ellipsized depepending on your language
        preferences
      </FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
    </FlexTable.Row>
  </FlexTable>
);

const generateUniqueId = (rowIndex: number) =>
  `${rowIndex}_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

const generateTableData = (rowsLength: number, columnsLength: number) =>
  [...Array(rowsLength)].map((_, rowIndex) => {
    const rowId = generateUniqueId(rowIndex);
    return [...Array(columnsLength)].reduce((acc, __, columnIndex) => {
      const keyName = `value${columnIndex + 1}`;
      return { ...acc, rowId, [keyName]: { value: `Cell ${rowIndex + 1}-${columnIndex + 1}` } };
    }, {});
  });

const BigTableRow = ({ data }: any) => {
  return (
    <FlexTable.Row>
      {Object.keys(R.omit(['rowId'], data)).map((valueKey, index) => {
        return (
          <FlexTable.Cell key={data.id} columnId={`column${index + 1}`}>
            {data[valueKey].value}
          </FlexTable.Cell>
        );
      })}
    </FlexTable.Row>
  );
};

export const BigTable = () => {
  const ReactComponent = () => {
    const rowsLength = number('Number of rows', 500);
    const columnsLength = number('Number of columns', 10);
    const tableData = useMemo(() => generateTableData(rowsLength, columnsLength), [
      rowsLength,
      columnsLength,
    ]);
    return (
      <FlexTable>
        <FlexTable.Row>
          {[...Array(columnsLength)].map((_, index) => (
            <FlexTable.Header columnId={`column${index + 1}`}>Header {index + 1}</FlexTable.Header>
          ))}
        </FlexTable.Row>
        {tableData.map(data => (
          <BigTableRow key={data.rowId} data={data} />
        ))}
      </FlexTable>
    );
  };
  return <ReactComponent />;
};

export const DifferentAlignmentsTable = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.backgroundBlack}>
      <FlexTable.Header columnId="column1">Left</FlexTable.Header>
      <FlexTable.Header columnId="column2" justifyContent="flex-end">
        Right
      </FlexTable.Header>
      <FlexTable.Header columnId="column3" justifyContent="flex-end">
        Right
      </FlexTable.Header>
      <FlexTable.Header columnId="column4" justifyContent="center">
        Center
      </FlexTable.Header>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
      <FlexTable.Cell columnId="column4">Cell 1-4</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
      <FlexTable.Cell columnId="column4">Cell 2-4</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
      <FlexTable.Cell columnId="column4">Cell 3-4</FlexTable.Cell>
    </FlexTable.Row>
  </FlexTable>
);

export const TableWithoutSeparators = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.backgroundBlack}>
      <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
      <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
      <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
    </FlexTable.Row>
    <FlexTable.Row hideSeparator>
      <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row hideSeparator>
      <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row hideSeparator>
      <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
    </FlexTable.Row>
  </FlexTable>
);

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.background};
`;

const StyledFlexTable = styled(FlexTable)`
  background-color: white;
  margin-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

export const TablesWithDifferentDensities = () => (
  <StyledDiv>
    <Typography type="title3">Default (Medium)</Typography>

    <StyledFlexTable>
      <FlexTable.Row>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.Row>
    </StyledFlexTable>

    <Typography type="title3">Small</Typography>
    <StyledFlexTable>
      <FlexTable.Row>
        <FlexTable.Header columnId="column1" density="s">
          Header 1
        </FlexTable.Header>
        <FlexTable.Header columnId="column2" density="s">
          Header 2
        </FlexTable.Header>
        <FlexTable.Header columnId="column3" density="s">
          Header 3
        </FlexTable.Header>
      </FlexTable.Row>
    </StyledFlexTable>

    <Typography type="title3">Medium</Typography>
    <StyledFlexTable>
      <FlexTable.Row>
        <FlexTable.Header columnId="column1" density="m">
          Header 1
        </FlexTable.Header>
        <FlexTable.Header columnId="column2" density="m">
          Header 2
        </FlexTable.Header>
        <FlexTable.Header columnId="column3" density="m">
          Header 3
        </FlexTable.Header>
      </FlexTable.Row>
    </StyledFlexTable>

    <Typography type="title3">Large</Typography>
    <StyledFlexTable>
      <FlexTable.Row>
        <FlexTable.Header columnId="column1" density="l">
          Header 1
        </FlexTable.Header>
        <FlexTable.Header columnId="column2" density="l">
          Header 2
        </FlexTable.Header>
        <FlexTable.Header columnId="column3" density="l">
          Header 3
        </FlexTable.Header>
      </FlexTable.Row>
    </StyledFlexTable>
  </StyledDiv>
);

export const TableWithDifferentRows = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.text}>Separator color set</FlexTable.Row>
    <FlexTable.Row>Default</FlexTable.Row>
    <FlexTable.Row hideSeparator>Separator hidden</FlexTable.Row>
    <FlexTable.Row>Default</FlexTable.Row>
  </FlexTable>
);

export const TableExpanded = () => {
  const TableExpandedExample = () => {
    const [expanded, setExpanded] = useState(false);
    return (
      <FlexTable>
        <FlexTable.Row>Default</FlexTable.Row>
        <FlexTable.Row expanded={expanded} expandableContent={<div>I am expanded</div>}>
          <Button variant="secondary" size="s" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Collapse' : 'Expand'}
          </Button>
        </FlexTable.Row>
        <FlexTable.Row>Default</FlexTable.Row>
        <FlexTable.Row>Default</FlexTable.Row>
      </FlexTable>
    );
  };
  return <TableExpandedExample />;
};

export const TableHeader = () => {
  const CustomisedTableHeader: React.FC = ({ children }) => (
    <FlexTable.Header columnId="column3" sortable>
      {({ sortable, sorted, fontSize, density, onSortClick, sortOrder }) => (
        <FlexTable.Header.SortButton onClick={onSortClick}>
          <Flag country="SE" inline height={3} />
          <FlexTable.Header.TextWrapper fontSize={fontSize} density={density} sorted={sorted}>
            {children}
          </FlexTable.Header.TextWrapper>
          {sortable && <FlexTable.Header.SortIcon sortOrder={sortOrder} />}
        </FlexTable.Header.SortButton>
      )}
    </FlexTable.Header>
  );
  return (
    <FlexTable>
      <FlexTable.Row>
        <FlexTable.Header columnId="column1" flex="1">
          Table header 1 flex 1
        </FlexTable.Header>
        <FlexTable.Header columnId="column2" flex="3">
          Table header 2 flex 3
        </FlexTable.Header>
        <CustomisedTableHeader>Customised header</CustomisedTableHeader>
        <FlexTable.Header columnId="column4">Table header 3 no flex</FlexTable.Header>
        <FlexTable.Header columnId="column5">
          <Typography type="title2">I&apos;m a component</Typography>
        </FlexTable.Header>
      </FlexTable.Row>
    </FlexTable>
  );
};

export const SortableHeadersUncontrolled = () => (
  <FlexTable>
    <FlexTable.Row>
      <FlexTable.Header columnId="column1" sortable>
        Uncontrolled 1
      </FlexTable.Header>
      <FlexTable.Header columnId="column2" sortable>
        Uncontrolled 2
      </FlexTable.Header>
      <FlexTable.Header
        columnId="column3"
        sortable
        initialSortOrder={FlexTable.CONSTANTS.SORT_ORDER_DESCENDING}
      >
        With initial sort order
      </FlexTable.Header>
      <FlexTable.Header columnId="column4" sortable={false}>
        Non sortable
      </FlexTable.Header>
    </FlexTable.Row>
  </FlexTable>
);

// For useState to work in storybook, components needs to be wrapped in a new function
export const SortableHeaderControlled = () => {
  const ReactComponent = () => {
    const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
      columnId: 'column1',
      sortOrder: FlexTable.CONSTANTS.SORT_ORDER_NONE,
    });

    const getSort = (columnId: string) =>
      columnSort.columnId === columnId ? columnSort.sortOrder : FlexTable.CONSTANTS.SORT_ORDER_NONE;
    const onSort: OnSort = (columnId, nextSortOrder) =>
      setColumnSort({ columnId, sortOrder: nextSortOrder });

    return (
      <FlexTable>
        <FlexTable.Row>
          <FlexTable.Header
            columnId="column1"
            sortable
            sortOrder={getSort('column1')}
            onSort={onSort}
          >
            Controlled1
          </FlexTable.Header>
          <FlexTable.Header
            columnId="column2"
            sortable
            sortOrder={getSort('column2')}
            onSort={onSort}
          >
            Controlled2
          </FlexTable.Header>
          <FlexTable.Header columnId="column3" sortable={false}>
            Not sortable
          </FlexTable.Header>
          <FlexTable.Header
            columnId="column4"
            sortable
            sortOrder={getSort('column4')}
            onSort={onSort}
          >
            Controlled3
          </FlexTable.Header>
        </FlexTable.Row>
      </FlexTable>
    );
  };
  return <ReactComponent />;
};

export const SortableHeaderOnlyAscendingDescending = () => {
  const ReactComponent = () => {
    const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
      columnId: 'column1',
      sortOrder: FlexTable.CONSTANTS.SORT_ORDER_ASCENDING,
    });

    const getSort = (columnId: string) =>
      columnSort.columnId === columnId ? columnSort.sortOrder : FlexTable.CONSTANTS.SORT_ORDER_NONE;
    const onSort: OnSort = columnId => {
      let nextSortOrder: SortOrder = FlexTable.CONSTANTS.SORT_ORDER_ASCENDING;
      const sameAsCurrentlySorted = columnId === columnSort.columnId;
      if (sameAsCurrentlySorted) {
        nextSortOrder =
          columnSort.sortOrder === FlexTable.CONSTANTS.SORT_ORDER_ASCENDING
            ? FlexTable.CONSTANTS.SORT_ORDER_DESCENDING
            : FlexTable.CONSTANTS.SORT_ORDER_ASCENDING;
      }
      setColumnSort({ columnId, sortOrder: nextSortOrder });
    };

    return (
      <FlexTable>
        <FlexTable.Row>
          <FlexTable.Header
            columnId="column1"
            sortable
            sortOrder={getSort('column1')}
            onSort={onSort}
          >
            Controlled1
          </FlexTable.Header>
          <FlexTable.Header
            columnId="column2"
            sortable
            sortOrder={getSort('column2')}
            onSort={onSort}
          >
            Controlled2
          </FlexTable.Header>
          <FlexTable.Header columnId="column3" sortable={false}>
            Not sortable
          </FlexTable.Header>
          <FlexTable.Header
            columnId="column4"
            sortable
            sortOrder={getSort('column4')}
            onSort={onSort}
          >
            Controlled3
          </FlexTable.Header>
        </FlexTable.Row>
      </FlexTable>
    );
  };
  return <ReactComponent />;
};

// TODO: add story to how you create a custom sorting header and variations thereof
