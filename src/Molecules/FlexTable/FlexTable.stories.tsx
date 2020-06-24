import React, { useState, useMemo } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { number, withKnobs } from '@storybook/addon-knobs';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import FlexTable from './FlexTable';
import { Button, Typography, Flag, Icon, Number, Flexbox, Separator } from '../..';
import { SortOrder } from './Header/HeaderContent/HeaderContent.types';
import { OnSort } from './Header/Header.types';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS } from './shared/constants';

export default {
  title: 'Molecules | FlexTable',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
  },
};

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.background};
`;

const StyledTableDiv = styled.div`
  &:not(:first-of-type) {
    margin-top: ${p => p.theme.spacing.unit(10)}px;
  }
  background-color: white;
`;

export const DefaultTable = () => {
  const DefaultTableExample = () => (
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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

  const DefaultTableWithTitleExample = () => (
    <FlexTable title="Title">
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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

  const DefaultTableWithFooterExample = () => (
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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
      <FlexTable.FooterRow>
        <FlexTable.Footer columnId="column1">Footer 1</FlexTable.Footer>
        <FlexTable.Footer columnId="column2">Footer 2</FlexTable.Footer>
        <FlexTable.Footer columnId="column3">Footer 3</FlexTable.Footer>
      </FlexTable.FooterRow>
    </FlexTable>
  );

  const DefaultTableWithActionsColumnExample = () => (
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        <FlexTable.Header columnId="actionsColumn" {...ICON_COLUMN_DEFAULT_FLEX_PROPS} />
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 1-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
        <FlexTable.Cell columnId="actionsColumn">
          <Button variant="neutral">
            <Icon.ThreeDots />
          </Button>
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 2-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
        <FlexTable.Cell columnId="actionsColumn">
          <Button variant="neutral">
            <Icon.ThreeDots />
          </Button>
        </FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Cell 3-2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
        <FlexTable.Cell columnId="actionsColumn">
          <Button variant="neutral">
            <Icon.ThreeDots />
          </Button>
        </FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );

  return (
    <StyledDiv>
      <StyledTableDiv>
        <Typography type="title3">Default Table</Typography>
        <DefaultTableExample />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Default Table With Title</Typography>
        <DefaultTableWithTitleExample />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Default Table With Footer</Typography>
        <DefaultTableWithFooterExample />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Default Table With Actions Column</Typography>
        <DefaultTableWithActionsColumnExample />
      </StyledTableDiv>
    </StyledDiv>
  );
};

export const TableWithNonHiglightableRows = () => (
  <FlexTable>
    <FlexTable.HeaderRow>
      <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
      <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
      <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
    </FlexTable.HeaderRow>
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
    <FlexTable.HeaderRow>
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
    </FlexTable.HeaderRow>
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
      const id = generateUniqueId(columnIndex);
      return { ...acc, rowId, [keyName]: { value: `Cell ${rowIndex + 1}-${columnIndex + 1}`, id } };
    }, {});
  });

const BigTableRow = ({ data }: any) => (
  <FlexTable.Row>
    {Object.keys(R.omit(['rowId'], data)).map((valueKey, index) => (
      <FlexTable.Cell key={data[valueKey].id} columnId={`column${index + 1}`}>
        {data[valueKey].value}
      </FlexTable.Cell>
    ))}
  </FlexTable.Row>
);

const VirtualizedRow: any = styled(FlexTable.Row).attrs({
  style: (p: { style: React.CSSProperties }) => p.style,
})``;

const VirtualizedTableRow = React.memo(({ data, style }: any) => (
  <VirtualizedRow style={style}>
    {Object.keys(R.omit(['rowId'], data)).map((valueKey, index) => (
      <FlexTable.Cell key={data[valueKey].id} columnId={`column${index + 1}`}>
        {data[valueKey].value}
      </FlexTable.Cell>
    ))}
  </VirtualizedRow>
));

export const BigTable = () => {
  const ReactComponent = () => {
    const rowsLength = number('Number of rows', 500);
    const columnsLength = number('Number of columns', 10);
    const [sort, setSort] = useState<any>({});
    const tableData = useMemo(() => generateTableData(rowsLength, columnsLength), [
      rowsLength,
      columnsLength,
    ]);
    const sortedData = useMemo(() => {
      if (sort.sortOrder === 'none') {
        return tableData;
      }
      const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
      const sorted = tableData.slice(0).sort((rowA, rowB) => {
        if (sort.sortOrder === 'ascending') {
          return getValue(rowB).localeCompare(getValue(rowA));
        }

        if (sort.sortOrder === 'descending') {
          return getValue(rowA).localeCompare(getValue(rowB));
        }

        return 0;
      });
      return sorted;
    }, [tableData, sort]);

    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          {[...Array(columnsLength)].map((_, index) => (
            <FlexTable.Header
              columnId={`column${index + 1}`}
              key={`column${index + 1}`}
              sortable
              onSort={(columnId, nextSortOrder) => {
                setSort({ columnId, sortOrder: nextSortOrder });
              }}
            >
              Header {index + 1}
            </FlexTable.Header>
          ))}
        </FlexTable.HeaderRow>
        {sortedData.map(data => (
          <BigTableRow key={data.rowId} data={data} />
        ))}
      </FlexTable>
    );
  };
  return <ReactComponent />;
};

const VirtualizedBigTableRow = ({ data: items, index, style }: any) => (
  <VirtualizedTableRow key={items[index].rowId} data={items[index]} style={style} />
);

const FullHeightDiv = styled.div`
  display: flex;
  flex: 1 0;
  height: 100vh;
`;

export const VirtualizedTable = () => {
  const ReactComponent = () => {
    const rowsLength = number('Number of rows', 500);
    const columnsLength = number('Number of columns', 10);
    const [sort, setSort] = useState<any>({});
    const tableData = useMemo(() => generateTableData(rowsLength, columnsLength), [
      rowsLength,
      columnsLength,
    ]);
    const sortedData = useMemo(() => {
      if (sort.sortOrder === 'none') {
        return tableData;
      }
      const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
      const sorted = tableData.slice(0).sort((rowA, rowB) => {
        if (sort.sortOrder === 'ascending') {
          return getValue(rowB).localeCompare(getValue(rowA));
        }

        if (sort.sortOrder === 'descending') {
          return getValue(rowA).localeCompare(getValue(rowB));
        }

        return 0;
      });
      return sorted;
    }, [tableData, sort]);

    return (
      <FullHeightDiv>
        <FlexTable>
          <FlexTable.HeaderRow>
            {[...Array(columnsLength)].map((_, index) => (
              <FlexTable.Header
                columnId={`column${index + 1}`}
                key={`column${index + 1}`}
                sortable
                onSort={(columnId, nextSortOrder) => {
                  setSort({ columnId, sortOrder: nextSortOrder });
                }}
              >
                Header {index + 1}
              </FlexTable.Header>
            ))}
          </FlexTable.HeaderRow>
          <AutoSizer>
            {({ height, width }: any) => (
              <List
                height={height}
                width={width}
                itemData={sortedData}
                itemCount={sortedData.length}
                itemSize={25}
                overscanCount={10}
              >
                {VirtualizedBigTableRow}
              </List>
            )}
          </AutoSizer>
        </FlexTable>
      </FullHeightDiv>
    );
  };
  return <ReactComponent />;
};

export const BigTableWithoutStickyHeader = () => {
  const ReactComponent = () => {
    const rowsLength = number('Number of rows', 500);
    const columnsLength = number('Number of columns', 10);
    const [sort, setSort] = useState<any>({});
    const tableData = useMemo(() => generateTableData(rowsLength, columnsLength), [
      rowsLength,
      columnsLength,
    ]);
    const sortedData = useMemo(() => {
      const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
      return tableData.sort((rowA, rowB) => {
        if (sort.sortOrder === 'ascending') {
          return getValue(rowB).localeCompare(getValue(rowA));
        }

        if (sort.sortOrder === 'descending') {
          return getValue(rowA).localeCompare(getValue(rowB));
        }

        return 0;
      });
    }, [tableData, sort]);

    return (
      <FlexTable stickyHeader={false}>
        <FlexTable.HeaderRow>
          {[...Array(columnsLength)].map((_, index) => (
            <FlexTable.Header
              columnId={`column${index + 1}`}
              sortable
              onSort={(columnId, nextSortOrder) => {
                setSort({ columnId, sortOrder: nextSortOrder });
              }}
            >
              Header {index + 1}
            </FlexTable.Header>
          ))}
        </FlexTable.HeaderRow>
        {sortedData.map(data => (
          <BigTableRow key={data.rowId} data={data} />
        ))}
      </FlexTable>
    );
  };
  return <ReactComponent />;
};

export const MultipleTables = () => {
  const ReactComponent = () => {
    const rowsLength = number('Number of rows', 100);
    const columnsLength = number('Number of columns', 5);
    const [sort, setSort] = useState<any>({});
    const tableData = useMemo(() => generateTableData(rowsLength, columnsLength), [
      rowsLength,
      columnsLength,
    ]);
    const sortedData = useMemo(() => {
      const getValue = (rowData: any) => rowData[sort.columnId.replace('column', 'value')].value;
      return tableData.sort((rowA, rowB) => {
        if (sort.sortOrder === 'ascending') {
          return getValue(rowB).localeCompare(getValue(rowA));
        }

        if (sort.sortOrder === 'descending') {
          return getValue(rowA).localeCompare(getValue(rowB));
        }

        return 0;
      });
    }, [tableData, sort]);

    return (
      <>
        <FlexTable>
          <FlexTable.HeaderRow>
            {[...Array(columnsLength)].map((_, index) => (
              <FlexTable.Header
                columnId={`column${index + 1}`}
                sortable
                onSort={(columnId, nextSortOrder) => {
                  setSort({ columnId, sortOrder: nextSortOrder });
                }}
              >
                Table1 Header {index + 1}
              </FlexTable.Header>
            ))}
          </FlexTable.HeaderRow>
          {sortedData.map(data => (
            <BigTableRow key={data.rowId} data={data} />
          ))}
        </FlexTable>
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <FlexTable>
          <FlexTable.HeaderRow>
            {[...Array(columnsLength)].map((_, index) => (
              <FlexTable.Header
                columnId={`column${index + 1}`}
                sortable
                onSort={(columnId, nextSortOrder) => {
                  setSort({ columnId, sortOrder: nextSortOrder });
                }}
              >
                Table 2 Header {index + 1}
              </FlexTable.Header>
            ))}
          </FlexTable.HeaderRow>
          {sortedData.map(data => (
            <BigTableRow key={data.rowId} data={data} />
          ))}
        </FlexTable>
      </>
    );
  };
  return <ReactComponent />;
};

export const DifferentAlignmentsTable = () => (
  <FlexTable>
    <FlexTable.HeaderRow>
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
    </FlexTable.HeaderRow>
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

export const HideColumnsOnMobilesTable = () => (
  <FlexTable>
    <FlexTable.HeaderRow>
      <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
      <FlexTable.Header columnId="column2" hidden md={{ hidden: false }}>
        Hidden column on mobile
      </FlexTable.Header>
      <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
    </FlexTable.HeaderRow>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 1-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Hidden on mobile</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 1-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 2-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Hidden on mobile</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 2-3</FlexTable.Cell>
    </FlexTable.Row>
    <FlexTable.Row>
      <FlexTable.Cell columnId="column1">Cell 3-1</FlexTable.Cell>
      <FlexTable.Cell columnId="column2">Hidden on mobile</FlexTable.Cell>
      <FlexTable.Cell columnId="column3">Cell 3-3</FlexTable.Cell>
    </FlexTable.Row>
  </FlexTable>
);

export const TableWithoutSeparators = () => (
  <FlexTable>
    <FlexTable.HeaderRow>
      <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
      <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
      <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
    </FlexTable.HeaderRow>
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

const StyledFlexTable = styled(FlexTable)`
  background-color: white;
  margin-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

export const TablesWithDifferentDensities = () => (
  <StyledDiv>
    <Typography type="title3">Default (Medium)</Typography>
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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
    </StyledFlexTable>

    <Typography type="title3">Small</Typography>
    <StyledFlexTable density="s">
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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
    </StyledFlexTable>

    <Typography type="title3">Medium</Typography>
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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
    </StyledFlexTable>

    <Typography type="title3">Large</Typography>
    <StyledFlexTable density="l">
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
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
    </StyledFlexTable>
  </StyledDiv>
);

export const TableWithDifferentRows = () => (
  <FlexTable>
    <FlexTable.Row separatorColor={t => t.color.barChartColor1}>Separator color set</FlexTable.Row>
    <FlexTable.Row>Default</FlexTable.Row>
    <FlexTable.Row hideSeparator>Separator hidden</FlexTable.Row>
    <FlexTable.Row>Default</FlexTable.Row>
  </FlexTable>
);

const expandedItemsGenerator = (renderComponent = false) =>
  [...Array(20)].reduce((acc, _, itemIndex) => {
    const keyName = `${itemIndex + 1}`;
    const labelText = `Label ${keyName}`;
    const label = renderComponent ? <Typography>{labelText}</Typography> : labelText;
    const valueText = Math.floor(10 ** (20 - Math.ceil(Math.random() * 20)) * Math.random());
    const value = renderComponent ? <Number value={valueText} /> : valueText.toString();
    return [...acc, { label, value }];
  }, []);

export const ExpandableTable = () => {
  const expandItemsText = expandedItemsGenerator();
  const expandItemsComponents = expandedItemsGenerator(true);
  const expandChildrenComponents = (
    <Flexbox container justifyContent="center" gutter={2}>
      <Flexbox item>
        <Button size="l" variant="primary">
          Buy
        </Button>
      </Flexbox>
      <Flexbox item>
        <Button size="l" variant="secondary">
          Sell
        </Button>
      </Flexbox>
    </Flexbox>
  );
  const ExpandedTableExample = () => {
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          <FlexTable.Header
            columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
            {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
          />
        </FlexTable.HeaderRow>

        <FlexTable.Row includeExpand>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row includeExpand expandItems={expandItemsText}>
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row includeExpand expandItems={expandItemsText} expanded>
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row includeExpand expandItems={expandItemsComponents}>
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expandChildren={expandChildrenComponents}
          includeExpand
        >
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    );
  };

  const ControlledExpandedTableExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>(['row3']);

    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          <FlexTable.Header
            columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
            {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
          />
        </FlexTable.HeaderRow>

        <FlexTable.Row includeExpand>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          includeExpand
          expandItems={expandItemsText}
          expanded={expandedRows.includes('row2')}
          onExpandToggle={expanded =>
            expanded
              ? setExpandedRows([...expandedRows, 'row2'])
              : setExpandedRows(expandedRows.filter(row => row !== 'row2'))
          }
        >
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          includeExpand
          expandItems={expandItemsText}
          expanded={expandedRows.includes('row3')}
          onExpandToggle={expanded =>
            expanded
              ? setExpandedRows([...expandedRows, 'row3'])
              : setExpandedRows(expandedRows.filter(row => row !== 'row3'))
          }
        >
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          includeExpand
          expandItems={expandItemsComponents}
          expanded={expandedRows.includes('row4')}
          onExpandToggle={expanded =>
            expanded
              ? setExpandedRows([...expandedRows, 'row4'])
              : setExpandedRows(expandedRows.filter(row => row !== 'row4'))
          }
        >
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          includeExpand
          expandItems={expandItemsText}
          expandChildren={expandChildrenComponents}
          expanded={expandedRows.includes('row5')}
          onExpandToggle={expanded =>
            expanded
              ? setExpandedRows([...expandedRows, 'row5'])
              : setExpandedRows(expandedRows.filter(row => row !== 'row5'))
          }
        >
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    );
  };

  const ExpandRow = ({ expandItems, expanded, expandChildren, children, toggleExpand }: any) => (
    <FlexTable.Row expanded={expanded} expandItems={expandItems} expandChildren={expandChildren}>
      {children}
      <FlexTable.ExpandCell
        columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
        expanded={expanded}
        onClick={toggleExpand}
        disabled={!expandChildren && !expandItems}
      />
    </FlexTable.Row>
  );

  const ControlledExpandableTableWithOwnCell = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>(['row3']);
    const toggleExpand = (rowId: string) => {
      const isAlreadyExpanded = expandedRows.includes(rowId);
      if (isAlreadyExpanded) {
        return setExpandedRows(expandedRows.filter(row => row !== rowId));
      }
      return setExpandedRows([...expandedRows, rowId]);
    };
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          <FlexTable.Header
            columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
            {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
          />
        </FlexTable.HeaderRow>

        <ExpandRow>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsText}
          expanded={expandedRows.includes('row2')}
          toggleExpand={() => toggleExpand('row2')}
        >
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsText}
          expanded={expandedRows.includes('row3')}
          toggleExpand={() => toggleExpand('row3')}
        >
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsComponents}
          expanded={expandedRows.includes('row4')}
          toggleExpand={() => toggleExpand('row4')}
        >
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsText}
          expandChildren={expandChildrenComponents}
          expanded={expandedRows.includes('row5')}
          toggleExpand={() => toggleExpand('row5')}
        >
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </ExpandRow>
      </FlexTable>
    );
  };

  return (
    <StyledDiv>
      <StyledTableDiv>
        <Typography type="title3">Default Expandable Table</Typography>
        <ExpandedTableExample />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Controlled Expandable Table</Typography>
        <ControlledExpandedTableExample />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Controlled Expandable Table With Own Cell</Typography>
        <ControlledExpandableTableWithOwnCell />
      </StyledTableDiv>
    </StyledDiv>
  );
};

export const TableHeaders = () => {
  const DefaultTableHeaders = () => {
    const CustomisedTableHeader: React.FC = ({ children }) => (
      <FlexTable.Header columnId="column3" sortable>
        {({ sortable, sorted, fontSize, onSortClick, sortOrder }) => (
          <FlexTable.Header.SortButton onClick={onSortClick}>
            <Flag country="SE" inline height={3} />
            <FlexTable.Header.TextWrapper fontSize={fontSize} sorted={sorted}>
              {children}
            </FlexTable.Header.TextWrapper>
            {sortable && <FlexTable.Header.SortIcon sortOrder={sortOrder} />}
          </FlexTable.Header.SortButton>
        )}
      </FlexTable.Header>
    );
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1" flex="1">
            Table header 1 flex 1
          </FlexTable.Header>
          <FlexTable.Header columnId="column2" flex="3">
            Table header 2 flex 3
          </FlexTable.Header>
          <CustomisedTableHeader>Customised header</CustomisedTableHeader>
          <FlexTable.Header columnId="column4">Table header 3 no flex</FlexTable.Header>
          <FlexTable.Header columnId="column5">
            <Typography type="title3">React component</Typography>
          </FlexTable.Header>
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };

  const UncontrolledSortableHeaders = () => {
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
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
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };

  // For useState to work in storybook, components needs to be wrapped in a new function
  const ControlledSortableHeaders = () => {
    const ReactComponent = () => {
      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_NONE,
      });

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;
      const onSort: OnSort = (columnId, nextSortOrder) =>
        setColumnSort({ columnId, sortOrder: nextSortOrder });

      return (
        <FlexTable>
          <FlexTable.HeaderRow>
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
          </FlexTable.HeaderRow>
        </FlexTable>
      );
    };
    return <ReactComponent />;
  };

  const SortableHeadersOnlyAscendingDescending = () => {
    const ReactComponent = () => {
      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_ASCENDING,
      });

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;
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
          <FlexTable.HeaderRow>
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
          </FlexTable.HeaderRow>
        </FlexTable>
      );
    };
    return <ReactComponent />;
  };

  return (
    <StyledDiv>
      <StyledTableDiv>
        <Typography type="title3">Default Table Header Variations</Typography>
        <DefaultTableHeaders />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Uncontrolled Sortable Headers</Typography>
        <UncontrolledSortableHeaders />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Controlled Sortable Headers</Typography>
        <ControlledSortableHeaders />
      </StyledTableDiv>
      <StyledTableDiv>
        <Typography type="title3">Sortable Headers – Only Ascending/Descending</Typography>
        <SortableHeadersOnlyAscendingDescending />
      </StyledTableDiv>
    </StyledDiv>
  );
};

// TODO: add story to how you create a custom sorting header and variations thereof
