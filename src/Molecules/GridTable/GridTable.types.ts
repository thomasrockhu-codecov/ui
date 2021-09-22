export type GridTableProps = {
  headers: Header[];
  rows: Row[];
  minCellWidth: number;
  initialColumnSizes?: string[];
};

export type Header = {
  title: React.ReactNode | null;
  columnId: string;
};

export type Row = Record<string, React.ReactNode>;
