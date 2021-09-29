import styled from 'styled-components';
import { ExpandableRowComponent } from './components/ExpandableRow/ExpandableRow.types';

export type ColumnConfig = { columnId: string; width?: string; hidden?: boolean };

export type GridTableProps = {
  minCellWidth: number;
  // initialColumnSizes?: string[];
  columnsConfig?: ColumnConfig[];
};

export type GridTableComponents = {
  THead: ReturnType<typeof styled.thead>;
  Th: ReturnType<typeof styled.th>;
  TBody: ReturnType<typeof styled.tbody>;
  Tr: ReturnType<typeof styled.tr>;
  ExpandableRow: ExpandableRowComponent;
  Td: ReturnType<typeof styled.td>;
};

export type GridTableComponent = React.FC<GridTableProps>;
