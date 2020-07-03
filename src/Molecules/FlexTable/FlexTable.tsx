import React from 'react';
import styled from 'styled-components';
import { HeaderRow, FooterRow, Row } from './Row';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cell } from './Cell';
import { constants, ColumnProvider, CellInlineContainer } from './shared';
import { FlexTableComponents, FlexTableComponent } from './FlexTable.types';
import { FlexTableProvider, useFlexTable } from './shared/FlexTableProvider';
import { ExpandCell } from './Cell/ExpandCell';
import { Typography } from '../..';
import { isElement } from '../../common/utils';

type HtmlDivProps = {} & React.HTMLAttributes<HTMLDivElement>;

const StyledDiv = styled('div').withConfig({
  shouldForwardProp: prop => !['stickyHeader'].includes(prop),
})<
  HtmlDivProps & {
    stickyHeader: boolean;
  }
>`
  ${p => (p.stickyHeader ? 'position: relative;' : '')}
`;

const FlexTableContainer: React.FC<HtmlDivProps> = ({ className, children, ...htmlDivProps }) => {
  const { stickyHeader } = useFlexTable();

  return (
    <StyledDiv className={className} role="table" stickyHeader={stickyHeader} {...htmlDivProps}>
      {children}
    </StyledDiv>
  );
};

const StyledCaption = styled.caption`
  display: flex;
`;

const StyledTypography = styled(Typography)`
  padding-left: ${p => p.theme.spacing.unit(1)}px;
`;

const FlexTable: FlexTableComponent & FlexTableComponents = ({
  className,
  density = 'm',
  expandable = false,
  stickyHeader = true,
  children,
  title,
  fontSize = 'm',
  sm,
  md,
  lg,
  xl,
  ...htmlProps
}) => (
  <FlexTableProvider
    density={density}
    stickyHeader={stickyHeader}
    fontSize={fontSize}
    expandable={expandable}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
  >
    {/* pass sticky with context instead of prop-drilling, since context might change */}
    <FlexTableContainer className={className} {...htmlProps}>
      <StyledCaption>
        {isElement(title) ? title : <StyledTypography type="title3">{title}</StyledTypography>}
      </StyledCaption>
      <ColumnProvider>{children}</ColumnProvider>
    </FlexTableContainer>
  </FlexTableProvider>
);

FlexTable.Row = Row;
FlexTable.HeaderRow = HeaderRow;
FlexTable.FooterRow = FooterRow;
FlexTable.Header = Header;
FlexTable.Footer = Footer;
FlexTable.ExpandCell = ExpandCell;
FlexTable.Cell = Cell;
FlexTable.CellInlineContainer = CellInlineContainer;
FlexTable.CONSTANTS = constants;

export default FlexTable;
