import styled from 'styled-components';

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

export const StyledTh = styled.th`
  position: relative;
  text-align: left;
`;

export const StyledTd = styled.td`
  text-align: left;
  overflow: hidden;
`;
