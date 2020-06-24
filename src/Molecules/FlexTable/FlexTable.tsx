import React from 'react';
import styled from 'styled-components';
import { HeaderRow, FooterRow, Row } from './Row';
import { Header } from './Header';
import { Footer } from './Footer';
import { Cell } from './Cell';
import { constants, ColumnProvider } from './shared';
import { Props, FlexTableComponents } from './FlexTable.types';
import { FlexTableProvider, useFlexTable } from './shared/FlexTableProvider';
import { ExpandCell } from './Cell/ExpandCell';
import { Typography, Box } from '../..';
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

const FlexTable: React.FC<Props> & FlexTableComponents = ({
  className,
  density = 'm',
  stickyHeader = true,
  children,
  title,
  fontSize = 'm',
  ...htmlProps
}) => (
  <FlexTableProvider density={density} stickyHeader={stickyHeader} fontSize={fontSize}>
    {/* pass sticky with context instead of prop-drilling, since context might change */}
    <FlexTableContainer className={className} {...htmlProps}>
      <caption>
        {isElement(title) ? (
          title
        ) : (
          <Box pl={1}>
            <Typography type="title3">{title}</Typography>
          </Box>
        )}
      </caption>
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
FlexTable.CONSTANTS = constants;

export default FlexTable;
