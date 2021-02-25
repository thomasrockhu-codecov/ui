import React, { useState } from 'react';
import FlexTable from '../FlexTable';
import { Typography } from '../../..';
import docs from '../FlexTable.mdx';
import { SortOrder } from '../Header/HeaderContent/HeaderContent.types';
import { OnSort } from '../Header/Header.types';
import { StyledBackground } from './storiesShared';

export default {
  title: 'Molecules / FlexTable / With persist sorting order',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

export const UncontrolledSortableHeadersThatSavesLastSorted = () => {
  const UncontrolledSortableHeadersThatSavesLastSortedExample = () => {
    return (
      <FlexTable id="table-saves-last-sorted" persistSortingOrder>
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
          <FlexTable.Header columnId="column4" sortable justifyContent="flex-end">
            Uncontrolled 3
          </FlexTable.Header>
        </FlexTable.HeaderRow>
      </FlexTable>
    );
  };
  return (
    <StyledBackground>
      <Typography type="title3">Uncontrolled Sortable Headers</Typography>
      <UncontrolledSortableHeadersThatSavesLastSortedExample />
    </StyledBackground>
  );
};

// For useState to work in storybook, components needs to be wrapped in a new function
export const ControlledSortableHeadersThatSavesLastSorted = () => {
  const ControlledSortableHeadersExample = () => {
    const ReactComponent = () => {
      const [columnSort, setColumnSort] = useState<{ columnId: string; sortOrder: SortOrder }>({
        columnId: 'column1',
        sortOrder: FlexTable.CONSTANTS.SORT_ORDER_NONE,
      });

      const getSort = (columnId: string) =>
        columnSort.columnId === columnId
          ? columnSort.sortOrder
          : FlexTable.CONSTANTS.SORT_ORDER_NONE;

      const onSort: OnSort = (columnId, nextSortOrder) => {
        setColumnSort({ columnId, sortOrder: nextSortOrder });
      };

      return (
        <FlexTable id="constrolled-table-saves-last-sorted" persistSortingOrder>
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
    <StyledBackground>
      <Typography type="title3">Controlled Sortable Headers</Typography>
      <ControlledSortableHeadersExample />
    </StyledBackground>
  );
};
