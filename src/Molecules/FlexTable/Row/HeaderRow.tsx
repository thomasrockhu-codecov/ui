import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { HeaderRowComponent } from './Row.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { useFlexTable } from '../shared/FlexTableProvider';

const StyledHeaderRow = styled(Row).withConfig({
  shouldForwardProp: (prop) =>
    !['hideSeparator', 'separatorColor', 'sticky', 'stickyOffsetTop'].includes(prop),
})<{
  hideSeparator: boolean;
  separatorColor: ColorFn;
  sticky: boolean;
  stickyOffsetTop: number;
}>`
  ${(p) =>
    p.sticky
      ? `
        z-index: 1;
        position: sticky;
        top: ${p.stickyOffsetTop}px;`
      : ''};
  ${(p) => (!p.hideSeparator ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : '')};
`;

export const HeaderRow: HeaderRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = (theme) => theme.color.text,
  children,
  stickyOffsetTop = 0,
  ...htmlProps
}) => {
  const { stickyHeader } = useFlexTable();

  return (
    <StyledHeaderRow
      className={className}
      hoverHighlight={false}
      hideSeparator={hideSeparator}
      isContent={false}
      separatorColor={separatorColor}
      sticky={stickyHeader}
      stickyOffsetTop={stickyOffsetTop}
      {...htmlProps}
    >
      {children}
    </StyledHeaderRow>
  );
};
