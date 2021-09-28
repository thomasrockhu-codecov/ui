import React from 'react';
import { Typography } from '../../..';
import { StyledTruncateTooltip } from '../../FlexTable/shared';

type Header = {
  columnId: string;
  title: React.ReactNode | null;
};

type Cell = {
  columnId: string;
  content: React.ReactNode | null;
};

type Row = Cell[];

export const generateTableData = (rowsLength: number, columnsLength: number) => {
  const headers: Header[] = [...Array(columnsLength)].map((_, colIndex) => ({
    title: (
      <StyledTruncateTooltip label={colIndex}>
        <Typography>{`col ${colIndex}`}</Typography>
      </StyledTruncateTooltip>
    ),
    columnId: `col_${colIndex}`,
  }));

  const rows: Row[] = [...Array(rowsLength)].map((_, rowIndex) => {
    return [...Array(columnsLength)].map((__, colIndex) => {
      const columnId = `col_${colIndex}`;
      return {
        columnId,
        content: (
          <StyledTruncateTooltip label={columnId}>
            <Typography color={(t) => t.color.text}>{`cell ${rowIndex} - ${colIndex}`}</Typography>
          </StyledTruncateTooltip>
        ),
      };
    });
  });

  return { headers, rows };
};
