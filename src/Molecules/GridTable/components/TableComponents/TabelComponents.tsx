import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColumnsContext } from '../../GridTable';

export const StyledTr = styled.tr`
  display: grid;
  grid-column-gap: 10px;
  align-items: center;
`;

export const StyledTable = styled.table<{ $columnSizes: string }>`
  isolation: isolate;
  width: 100%;
  overflow: auto;
  box-sizing: border-box;

  ${StyledTr} {
    grid-template-columns: ${({ $columnSizes }) => $columnSizes} 20px;
  }
`;

export const StyledTHead = styled.thead`
  ${StyledTr} {
    border-bottom: 1px solid gray;
  }
`;

export const StyledTBody = styled.tbody`
  ${StyledTr} {
    :not(:last-child) {
      border-bottom: 1px solid lightgray;
    }
  }
`;

export const StyledTh = styled.th<{ $hidden: boolean | undefined }>`
  position: relative;
  text-align: left;
  ${({ $hidden }) => ($hidden ? 'display: none;' : '')}
`;

export const StyledTd = styled.td<{ $hidden: boolean | undefined }>`
  text-align: left;
  overflow: hidden;
  ${({ $hidden }) => ($hidden ? 'display: none;' : '')}
`;

const useColumnContext = (columnId: string) => {
  const columnsConfig = useContext(ColumnsContext);
  return columnsConfig?.find((columnConfig) => columnConfig.columnId === columnId);
};

const Cell = ({
  columnId,
  isHeaderCell = false,
  children,
}: {
  columnId: string;
  // eslint-disable-next-line react/require-default-props
  isHeaderCell?: boolean;
  children: any;
}) => {
  const columnConfig = useColumnContext(columnId);
  return isHeaderCell ? (
    <StyledTh $hidden={columnConfig?.hidden}>{children}</StyledTh>
  ) : (
    <StyledTd $hidden={columnConfig?.hidden}>{children}</StyledTd>
  );
};

export const GridTh = ({ columnId, children }: { columnId: string; children: any }) => {
  return (
    <Cell columnId={columnId} isHeaderCell>
      {children}
    </Cell>
  );
};

export const GridTd = ({ columnId, children }: { columnId: string; children: any }) => {
  return <Cell columnId={columnId}>{children}</Cell>;
};
