import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Icon, Typography } from '../..';
import { Header, Row } from './GridTable.types';

type GridTableProp = {
  headers: Header[];
  rows: Row[];
  minCellWidth: number;
  initialColumnSizes?: string[];
};

const GridTr = styled.tr`
  display: grid;
  grid-column-gap: 10px;
  align-items: center;
`;

const GridTable = styled.table<{ $columnSizes: string }>`
  isolation: isolate;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  ${GridTr} {
    grid-template-columns: ${({ $columnSizes }) => $columnSizes} 20px;
  }
`;

const GridTHead = styled.thead`
  ${GridTr} {
    border-bottom: 1px solid gray;
  }
`;

const GridTBody = styled.tbody`
  ${GridTr} {
    :not(:last-child) {
      border-bottom: 1px solid lightgray;
    }
  }
`;

const GridTh = styled.th`
  position: relative;
  text-align: left;
`;
const GridTd = styled.td`
  text-align: left;
  overflow: hidden;
`;

const createHeaders = (headers: Header[]) => {
  return headers.map((header) => ({
    ...header,
    ref: useRef<HTMLTableCellElement>(null),
  }));
};

const ResizeHandle = styled.div<{ $active: boolean }>`
  display: block;
  position: absolute;
  cursor: col-resize;
  width: 7px;
  right: 0;
  top: 0;
  z-index: 1;
  border-right: 2px solid transparent;

  &:hover {
    border-color: #ccc;
  }

  ${({ $active }) => ($active ? 'border-color: #517ea5;' : '')}
`;

const convertColumnSizes = (columnSizes: string[]) => columnSizes.join(' ');

const ExpandableRow: React.FC = ({ children }) => (
  <tr>
    <td>{children}</td>
  </tr>
);

const GridBodyTr: React.FC<{ expandItems: string[] }> = ({ children, expandItems }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <GridTr>
        {children}
        <GridTd>
          {expandItems && (
            <Button variant="neutral" onClick={() => setExpanded(!expanded)}>
              <Icon.ThinChevron direction="down" size={3} />
            </Button>
          )}
        </GridTd>
      </GridTr>
      {expanded && expandItems ? (
        <ExpandableRow>
          {Array.isArray(expandItems) ? (
            <ul>
              {expandItems.map((item) => (
                <li>
                  <Typography>{item}</Typography>
                </li>
              ))}
            </ul>
          ) : (
            expandItems
          )}
        </ExpandableRow>
      ) : null}
    </>
  );
};

const GridTableComponent: React.FC<GridTableProp> = ({
  headers,
  rows,
  minCellWidth,
  initialColumnSizes,
}) => {
  const [tableHeight, setTableHeight] = useState('auto');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  const [columnSizes, setColumnSizes] = useState(initialColumnSizes || headers.map(() => '1fr'));

  useEffect(() => {
    setTableHeight(`${tableRef.current?.offsetHeight}px`);
  }, []);

  const mouseDown = (index: number) => {
    setActiveIndex(index);
  };

  const columns = createHeaders(headers);

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      // Return an array of px values
      if (!activeIndex) return;

      let sizeDiff = 0; // the change in column width (increase active column, decrease the column to the right)

      const newColumnWidth = columns.map((col, i) => {
        const oldWidth = Number(col.ref.current?.getBoundingClientRect().width);

        // don't change widths for columns to the left of the active column
        if (i < activeIndex) return `${oldWidth}px`;

        // increase/decrease the active column and the reverse for the column to the right
        if (i === activeIndex) {
          const offsetLeft = Number(col.ref.current?.offsetLeft);
          const newWidth = e.clientX - offsetLeft;

          // don't decrease below minimum width
          if (newWidth >= minCellWidth) {
            const tempSizeDiff = newWidth - oldWidth;

            // only increase width if the column to the right has width left to shrink
            if (
              Number(columns[i + 1].ref.current?.getBoundingClientRect().width) - tempSizeDiff >
              minCellWidth
            ) {
              sizeDiff = tempSizeDiff;
              return `${newWidth}px`;
            }

            return `${oldWidth}px`;
          }

          // no change
          return `${oldWidth}px`;
        }

        // shrink/increase the column directly right to the active column
        if (activeIndex + 1 === i) {
          const newWidth = oldWidth - sizeDiff;

          // only increase width if the column to the right has width left to shrink
          if (newWidth >= minCellWidth) {
            return `${newWidth}px`;
          }

          // no change
          return `${oldWidth}px`;
        }

        // don't resize columns two or more steps to the right of the active column
        return `${oldWidth}px`;
      });

      // Assign the px values to the table
      setColumnSizes(newColumnWidth);
    },
    [activeIndex, columns, minCellWidth],
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', removeListeners);
  }, [mouseMove]);

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('mouseup', mouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return (
    <GridTable ref={tableRef} $columnSizes={convertColumnSizes(columnSizes)}>
      <GridTHead>
        <GridTr>
          {columns.map((header, i) => (
            <GridTh ref={header.ref}>
              {header.title}
              <ResizeHandle
                style={{ height: tableHeight }}
                onMouseDown={() => mouseDown(i)}
                $active={activeIndex === i}
                role="none" // TODO: nice role plz
              />
            </GridTh>
          ))}
        </GridTr>
      </GridTHead>
      <GridTBody>
        {rows.map((row) => (
          <GridBodyTr expandItems={row.expandItems as string[]}>
            {Object.entries(row)
              .filter(([key]) => key !== 'expandItems')
              .map(([, rowValue]) => (
                <GridTd>{rowValue}</GridTd>
              ))}
          </GridBodyTr>
        ))}
      </GridTBody>
    </GridTable>
  );
};

export default GridTableComponent;
