import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Icon, Typography } from '../..';
import { GridTableProps } from './GridTable.types';
import { useColumnResize } from './utils/useColumnResize';

const StyledTr = styled.tr`
  display: grid;
  grid-column-gap: 10px;
  align-items: center;
`;

const StyledTable = styled.table<{ $columnSizes: string }>`
  isolation: isolate;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  ${StyledTr} {
    grid-template-columns: ${({ $columnSizes }) => $columnSizes} 20px;
  }
`;

const StyledTHead = styled.thead`
  ${StyledTr} {
    border-bottom: 1px solid gray;
  }
`;

const StyledTBody = styled.tbody`
  ${StyledTr} {
    :not(:last-child) {
      border-bottom: 1px solid lightgray;
    }
  }
`;

const StyledTh = styled.th`
  position: relative;
  text-align: left;
`;

const StyledTd = styled.td`
  text-align: left;
  overflow: hidden;
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
      <StyledTr>
        {children}
        <StyledTd>
          {expandItems && (
            <Button variant="neutral" onClick={() => setExpanded(!expanded)}>
              <Icon.ThinChevron direction="down" size={3} />
            </Button>
          )}
        </StyledTd>
      </StyledTr>
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

const GridTableComponent: React.FC<GridTableProps> = ({
  headers,
  rows,
  minCellWidth,
  initialColumnSizes,
}) => {
  const [columnSizes, setColumnSizes] = useState(initialColumnSizes || headers.map(() => '1fr'));

  const { tableRef, headerWithRefs, ResizeHandle } = useColumnResize(
    headers,
    setColumnSizes,
    minCellWidth,
  );

  return (
    <StyledTable ref={tableRef} $columnSizes={convertColumnSizes(columnSizes)}>
      <StyledTHead>
        <StyledTr>
          {headerWithRefs.map((header, i) => (
            <StyledTh ref={header.ref}>
              {header.title}
              {header.columnId !== 'button' && <ResizeHandle index={i} />}
            </StyledTh>
          ))}
        </StyledTr>
      </StyledTHead>
      <StyledTBody>
        {rows.map((row) => (
          <GridBodyTr expandItems={row.expandItems as string[]}>
            {Object.entries(row)
              .filter(([key]) => key !== 'expandItems')
              .map(([, rowValue]) => (
                <StyledTd>{rowValue}</StyledTd>
              ))}
          </GridBodyTr>
        ))}
      </StyledTBody>
    </StyledTable>
  );
};

export default GridTableComponent;
