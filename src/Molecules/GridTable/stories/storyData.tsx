import React from 'react';

import { Typography, Development, Link, Button } from '../../..';
import { StyledTruncateTooltip } from '../../FlexTable/shared';

export type Header = {
  columnId: string;
  title: React.ReactNode | null;
};

export type Cell = {
  columnId: string;
  content: React.ReactNode | null;
};

export type Row = Cell[];

export const defaultRows: Row[] = [
  [
    {
      columnId: 'button',
      content: <Button>Köp</Button>,
    },
    {
      columnId: 'instrument',
      content: (
        <Typography>
          <Link to="/">Mayo inc.</Link>
        </Typography>
      ),
    },
    {
      columnId: 'development',
      content: (
        <Typography>
          <Development percentage value={200} />
        </Typography>
      ),
    },
    {
      columnId: 'comment',
      content: <Typography>This is a comment</Typography>,
      // {columnId: 'expandItems',
      // content: [
      //   'This is expand value 1',
      //   'This is expand value 2',
      //   'This is expand value 3',
      //   'This is expand value 4',
      //   'This is expand value 5',
      // ]},
    },
  ],
  [
    { columnId: 'button', content: <Button>Köp</Button> },
    {
      columnId: 'instrument',
      content: (
        <Typography>
          <Link to="/">Pickles AB</Link>
        </Typography>
      ),
    },
    {
      columnId: 'development',
      content: (
        <Typography>
          <Development percentage value={-20} />
        </Typography>
      ),
    },
    {
      columnId: 'comment',
      content: <Typography>This is a comment</Typography>,
      // expandItems: [
      //   'This is expand value 1',
      //   'This is expand value 2',
      //   'This is expand value 3',
      //   'This is expand value 4',
      //   'This is expand value 5',
      // ],
    },
  ],
  [
    { columnId: 'button', content: <Button>Köp</Button> },
    {
      columnId: 'instrument',
      content: (
        <Typography>
          <Link to="/">Marmalade(TM)</Link>
        </Typography>
      ),
    },
    {
      columnId: 'development',
      content: (
        <Typography>
          <Development percentage value={0} />
        </Typography>
      ),
    },
    { columnId: 'comment', content: <Typography>This is a comment</Typography> },
  ],
  [
    { columnId: 'button', content: <Button>Köp</Button> },
    {
      columnId: 'instrument',
      content: (
        <Typography>
          <Link to="/">Butter Corp.</Link>
        </Typography>
      ),
    },
    {
      columnId: 'development',
      content: (
        <Typography>
          <Development percentage value={15} />
        </Typography>
      ),
    },
    { columnId: 'comment', content: <Typography>This is a comment</Typography> },
    // expandItems: [
    //   'This is expand value 1',
    //   'This is expand value 2',
    //   'This is expand value 3',
    //   'This is expand value 4',
    //   'This is expand value 5',
    // ],
  ],
];

export const defaultHeaders: Header[] = [
  { title: null, columnId: 'button' },
  { title: <Typography weight="bold">Instrument</Typography>, columnId: 'instrument' },
  { title: <Typography weight="bold">Development</Typography>, columnId: 'development' },
  { title: <Typography weight="bold">Comment</Typography>, columnId: 'Comment' },
];

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
