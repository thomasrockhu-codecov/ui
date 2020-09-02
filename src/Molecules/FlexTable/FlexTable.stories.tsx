import React, { useState, useMemo } from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { number, withKnobs } from '@storybook/addon-knobs';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import FlexTable from './FlexTable';
import { Button, Typography, Flag, Number, Flexbox, DateTime } from '../..';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS } from './shared/constants';
import docs from './FlexTable.mdx';
import { FlexPropsType } from './shared/ColumnProvider/ColumnProvider.types';

export default {
  title: 'Molecules | FlexTable',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
    ...docs.parameters,
  },
};

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.background};
  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.spacing.unit(10)}px;
  }
`;

const StyledFlexTable = styled(FlexTable)`
  &:not(:last-of-type) {
    margin-bottom: ${p => p.theme.spacing.unit(10)}px;
  }
`;

export const FlexTableWithDifferentRows = () => {
  const FlexTableWithDifferentRowsExample = () => (
    <StyledFlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Default</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Default</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Default</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row hoverHighlight={false}>
        <FlexTable.Cell columnId="column1">No highlight</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">No highlight</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">No highlight</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row hideSeparator>
        <FlexTable.Cell columnId="column1">Separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Separator hidden</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row hoverHighlight={false} hideSeparator>
        <FlexTable.Cell columnId="column1">No highlight and separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">No highlight and separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">No highlight and separator hidden</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row separatorColor={t => t.color.barChartColor1}>
        <FlexTable.Cell columnId="column1">Separator color set</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Separator color set</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Separator color set</FlexTable.Cell>
      </FlexTable.Row>
    </StyledFlexTable>
  );

  return (
    <StyledDiv>
      <Typography type="title3">FlexTable With Different Rows</Typography>
      <FlexTableWithDifferentRowsExample />
    </StyledDiv>
  );
};

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const TableCustomDataCells = () => {
  const Story = () => {
    const TruncateStartHeader: React.FC<{
      currency: string;
      columnId: string;
      flex: string;
      justifyContent?: FlexPropsType['justifyContent'];
    }> = ({ children, columnId, flex, currency, justifyContent }) => (
      <FlexTable.Header columnId={columnId} flex={flex} justifyContent={justifyContent} sortable>
        {({ sortable, sorted, fontSize, onSortClick, sortOrder }) => (
          <FlexTable.Header.SortButton onClick={onSortClick}>
            <StyledFlexboxContainer container>
              <FlexTable.CellInlineContainer item>
                <FlexTable.Header.TextWrapper fontSize={fontSize} sorted={sorted}>
                  {children}
                </FlexTable.Header.TextWrapper>
              </FlexTable.CellInlineContainer>
              <Flexbox item>
                <FlexTable.Header.TextWrapper fontSize={fontSize} sorted={sorted} truncate={false}>
                  {currency}
                </FlexTable.Header.TextWrapper>
              </Flexbox>
              {sortable && (
                <Flexbox item>
                  <FlexTable.Header.SortIcon sortOrder={sortOrder} />
                </Flexbox>
              )}
            </StyledFlexboxContainer>
          </FlexTable.Header.SortButton>
        )}
      </FlexTable.Header>
    );

    const NumberCell: React.FC<{
      columnId: string;
      value: number;
      percentage?: boolean;
    }> = React.memo(({ columnId, value, percentage = false }) => (
      <FlexTable.Cell columnId={columnId}>
        {({ fontSize }) => (
          <FlexTable.Cell.TextWrapper fontSize={fontSize}>
            <Number value={value} percentage={percentage} />
          </FlexTable.Cell.TextWrapper>
        )}
      </FlexTable.Cell>
    ));

    const NumberFooter: React.FC<{
      columnId: string;
      value: number;
      percentage?: boolean;
    }> = React.memo(({ columnId, value, percentage = false }) => (
      <FlexTable.Footer columnId={columnId}>
        {({ fontSize }) => (
          <FlexTable.Footer.TextWrapper fontSize={fontSize}>
            <Number value={value} percentage={percentage} />
          </FlexTable.Footer.TextWrapper>
        )}
      </FlexTable.Footer>
    ));

    const DateCell: React.FC<{ columnId: string; value: number }> = React.memo(
      ({ columnId, value }) => (
        <FlexTable.Cell columnId={columnId}>
          {({ fontSize }) => (
            <FlexTable.Cell.TextWrapper fontSize={fontSize}>
              <DateTime value={value} />
            </FlexTable.Cell.TextWrapper>
          )}
        </FlexTable.Cell>
      ),
    );

    const FlagCell: React.FC<{ columnId: string; country: string }> = React.memo(
      ({ columnId, country }) => (
        <FlexTable.Cell columnId={columnId}>
          {({ fontSize }) => (
            <FlexTable.Cell.TextWrapper fontSize={fontSize}>
              <Flag country={country} />
            </FlexTable.Cell.TextWrapper>
          )}
        </FlexTable.Cell>
      ),
    );

    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="date">Date</FlexTable.Header>
          <TruncateStartHeader
            columnId="transferable-quantity"
            flex="0 0 150px"
            justifyContent="flex-end"
            currency="USD"
          >
            Transferable Quantity
          </TruncateStartHeader>
          <FlexTable.Header columnId="country">Country</FlexTable.Header>
          <FlexTable.Header columnId="percentage" justifyContent="flex-end">
            Percentage
          </FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <DateCell columnId="date" value={1594385610185} />
          <NumberCell columnId="transferable-quantity" value={300} />
          <FlagCell columnId="country" country="SE" />
          <NumberCell columnId="percentage" value={75} percentage />
        </FlexTable.Row>
        <FlexTable.Row>
          <DateCell columnId="date" value={1594385610000} />
          <NumberCell columnId="transferable-quantity" value={100} />
          <FlagCell columnId="country" country="UK" />
          <NumberCell columnId="percentage" value={25} percentage />
        </FlexTable.Row>
        <FlexTable.FooterRow>
          <FlexTable.Footer columnId="date" />
          <NumberFooter columnId="transferable-quantity" value={400} />
          <FlexTable.Footer columnId="country" />
          <NumberFooter columnId="percentage" value={25} percentage />
        </FlexTable.FooterRow>
      </FlexTable>
    );
  };
  return <Story />;
};

const expandedItemsGenerator = (renderComponent = false) =>
  [...Array(20)].reduce((acc, _, itemIndex) => {
    // Make the first item really long
    if (itemIndex === 0) {
      const label = 'This is a reaaaallllyyy loooong label demonstrating truncation';
      const value = 'This valuues is super long to also demonstrate truncation';
      return [...acc, { label, value }];
    }
    const keyName = `${itemIndex + 1}`;
    const labelText = `Label ${keyName}`;
    const label = renderComponent
      ? ({ fontSize }: any) => (
          <FlexTable.ExpandItem.TextWrapperLabel fontSize={fontSize}>
            {labelText}
          </FlexTable.ExpandItem.TextWrapperLabel>
        )
      : labelText;
    const valueText = Math.floor(10 ** (20 - Math.ceil(Math.random() * 20)) * Math.random());
    const value = renderComponent
      ? ({ fontSize }: any) => (
          <FlexTable.ExpandItem.TextWrapperValue fontSize={fontSize}>
            <Number value={valueText} />
          </FlexTable.ExpandItem.TextWrapperValue>
        )
      : valueText.toString();
    return [...acc, { label, value }];
  }, []);

export const ExpandableTableWithDifferentScenarios = () => {
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
      <StyledFlexTable expandable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>

        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsText}>
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsText} initiallyExpanded>
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsComponents}>
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsText} expandChildren={expandChildrenComponents}>
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    );
  };

  const OnlyExpandableOnMobileTable = () => {
    const columnData = [
      { label: 'Header 4', value: 'Expandable 4' },
      { label: 'Header 5', value: 'Expandable 5' },
      { label: 'Header 6', value: 'Expandable 6' },
      { label: 'Header 7', value: 'Expandable 7' },
    ];
    return (
      <StyledFlexTable expandable md={{ expandable: false }}>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          <FlexTable.Header columnId="column4" hidden md={{ hidden: false }}>
            Header 4
          </FlexTable.Header>
          <FlexTable.Header columnId="column5" hidden md={{ hidden: false }}>
            Header 5
          </FlexTable.Header>
          <FlexTable.Header columnId="column6" hidden md={{ hidden: false }}>
            Header 6
          </FlexTable.Header>
          <FlexTable.Header columnId="column7" hidden md={{ hidden: false }}>
            Header 7
          </FlexTable.Header>
        </FlexTable.HeaderRow>

        <FlexTable.Row expandItems={columnData} md={{ expandItems: [] }}>
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column4">Expandable 4</FlexTable.Cell>
          <FlexTable.Cell columnId="column5">Expandable 5</FlexTable.Cell>
          <FlexTable.Cell columnId="column6">Expandable 6</FlexTable.Cell>
          <FlexTable.Cell columnId="column7">Expandable 7</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    );
  };

  const ControlledExpandedTableExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>(['row3']);
    const isExpanded = (rowId: string) => expandedRows.includes(rowId);
    const onExpandClick = (rowId: string) => (newExpanded: boolean) =>
      newExpanded
        ? setExpandedRows([...expandedRows, rowId])
        : setExpandedRows(expandedRows.filter(row => row !== rowId));
    return (
      <StyledFlexTable expandable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>

        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expanded={isExpanded('row2')}
          onExpandToggle={onExpandClick('row2')}
        >
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expanded={isExpanded('row3')}
          onExpandToggle={onExpandClick('row3')}
        >
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsComponents}
          expanded={isExpanded('row4')}
          onExpandToggle={onExpandClick('row4')}
        >
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expandChildren={expandChildrenComponents}
          expanded={isExpanded('row5')}
          onExpandToggle={onExpandClick('row5')}
        >
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
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

  const ControlledExpandableTableWithCustomRowExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>(['row3']);
    const toggleExpand = (rowId: string) => {
      const isAlreadyExpanded = expandedRows.includes(rowId);
      if (isAlreadyExpanded) {
        return setExpandedRows(expandedRows.filter(row => row !== rowId));
      }
      return setExpandedRows([...expandedRows, rowId]);
    };
    return (
      <StyledFlexTable>
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
      </StyledFlexTable>
    );
  };

  const ExpandedTableDifferentFontSizeOnMobile = () => {
    return (
      <StyledFlexTable fontSize="m" md={{ fontSize: 's' }} expandable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>

        <FlexTable.Row expandItems={expandItemsText} initiallyExpanded>
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>
      </StyledFlexTable>
    );
  };

  return (
    <StyledDiv>
      <Typography type="title3">Default Expandable Table</Typography>
      <ExpandedTableExample />
      <Typography type="title3">Only Expandable On Mobile Table</Typography>
      <OnlyExpandableOnMobileTable />
      <Typography type="title3">Controlled Expandable Table</Typography>
      <ControlledExpandedTableExample />
      <Typography type="title3">Controlled Expandable Table With Custom Row</Typography>
      <ControlledExpandableTableWithCustomRowExample />
      <Typography type="title3">Different Font Size For Expand Item On Mobile</Typography>
      <ExpandedTableDifferentFontSizeOnMobile />
    </StyledDiv>
  );
};

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

const BigTableRow = ({ data }: any) => {
  const xsColumnKeys = Object.keys(data).filter((_, index) => Boolean(index % 2));
  const expandItems = xsColumnKeys.map(
    (key, index) => ({ label: `Header ${index * 2 + 1}`, value: data[key].value }),
    {},
  );
  return (
    <FlexTable.Row expandItems={expandItems} md={{ expandItems: [] }}>
      {Object.keys(R.omit(['rowId'], data)).map((valueKey, index) => (
        <FlexTable.Cell key={data[valueKey].id} columnId={`column${index + 1}`}>
          {data[valueKey].value}
        </FlexTable.Cell>
      ))}
    </FlexTable.Row>
  );
};

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
      <FlexTable expandable md={{ expandable: false }}>
        <FlexTable.HeaderRow>
          {[...Array(columnsLength)].map((_, index) => (
            <FlexTable.Header
              columnId={`column${index + 1}`}
              key={`column${index + 1}`}
              sortable
              onSort={(columnId, nextSortOrder) => {
                setSort({ columnId, sortOrder: nextSortOrder });
              }}
              hidden={Boolean(index % 2)}
              md={{ hidden: false }}
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

export const MultipleBigTablesWithStickyHeaders = () => {
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
      <StyledDiv>
        <Typography type="title3">
          Table 1 - Multiple Big Tables Demonstrating Proper Sticky Header
        </Typography>
        <StyledFlexTable>
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
        </StyledFlexTable>
        <Typography type="title3">
          Table 2 - Multiple Big Tables Demonstrating Proper Sticky Header
        </Typography>
        <StyledFlexTable>
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
        </StyledFlexTable>
      </StyledDiv>
    );
  };
  return <ReactComponent />;
};
