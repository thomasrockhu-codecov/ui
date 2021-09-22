import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../GridTable.types';

const addHeaderRefs = (headers: Header[]) => {
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

export const useColumnResize = (
  headers: Header[],
  setColumnSizes: React.Dispatch<React.SetStateAction<string[]>>,
  // activeIndex: number | null,
  // setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>,
  minCellWidth: number,
) => {
  const [tableHeight, setTableHeight] = useState('auto');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  const headerWithRefs = addHeaderRefs(headers);

  useEffect(() => {
    setTableHeight(`${tableRef.current?.offsetHeight}px`);
  }, []);

  const mouseDown = (index: number) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (e: MouseEvent) => {
      // Return an array of px values
      if (!activeIndex) return;

      let sizeDiff = 0; // the change in column width (increase active column, decrease the column to the right)

      const newColumnWidth = headerWithRefs.map((col, i) => {
        // TODO: try to figure out how to use scrollWidth instead of getBoundingClientRect (causes weird resize issues in some browsers) as it's much more performant
        const oldWidth = Number(col.ref.current?.getBoundingClientRect().width);

        // don't change widths for columns to the left of the active column
        if (i < activeIndex) return `${oldWidth}fr`;

        // increase/decrease the active column and the reverse for the column to the right
        if (i === activeIndex) {
          const offsetLeft = Number(col.ref.current?.offsetLeft);
          const newWidth = e.clientX - offsetLeft;

          // don't decrease below minimum width
          if (newWidth >= minCellWidth) {
            const tempSizeDiff = newWidth - oldWidth;

            // only increase width if the column to the right has width left to shrink
            if (
              // TODO: try to figure out how to use scrollWidth instead of getBoundingClientRect (causes weird resize issues in some browsers) as it's much more performant
              Number(headerWithRefs[i + 1].ref.current?.getBoundingClientRect().width) -
                tempSizeDiff >
              minCellWidth
            ) {
              sizeDiff = tempSizeDiff;
              return `${newWidth}fr`;
            }

            return `${oldWidth}fr`;
          }

          // no change
          return `${oldWidth}fr`;
        }

        // shrink/increase the column directly right to the active column
        if (activeIndex + 1 === i) {
          const newWidth = oldWidth - sizeDiff;

          // only increase width if the column to the right has width left to shrink
          if (newWidth >= minCellWidth) {
            return `${newWidth}fr`;
          }

          // no change
          return `${oldWidth}fr`;
        }

        // don't resize columns two or more steps to the right of the active column
        return `${oldWidth}fr`;
      });

      // Assign the px values to the table
      setColumnSizes(newColumnWidth);
    },
    [activeIndex, headerWithRefs, minCellWidth, setColumnSizes],
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

  const ResizeHandleComponent: React.FC<{ index: number }> = ({ index }) => (
    <ResizeHandle
      style={{ height: tableHeight }}
      onMouseDown={() => mouseDown(index)}
      $active={activeIndex === index}
      role="none" // TODO: nice role plz
    />
  );

  return { tableRef, headerWithRefs, ResizeHandle: ResizeHandleComponent };
};
