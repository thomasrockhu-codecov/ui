import React from 'react';
import styled from 'styled-components';
import { RowComponent } from './Row.types';
import { Box, Flexbox } from '../../../index';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { getDensityPaddings } from '../shared/textUtils';
import { Density } from '../shared/shared.types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandItems } from './ExpandItems';

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled('div').withConfig({
  shouldForwardProp: prop =>
    !['hideSeparator', 'expanded', 'separatorColor', 'density'].includes(prop),
})<{
  hideSeparator: boolean;
  expanded: boolean;
  separatorColor: ColorFn;
}>`
  ${p => (!p.hideSeparator ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : '')};
  padding-right: ${p => p.theme.spacing.unit(1)}px;
  padding-left: ${p => p.theme.spacing.unit(0.5)}px;
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid
    ${p => (p.expanded ? p.theme.color.cta : 'transparent')};
`;

const StyledFlexbox = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['hoverHighlight', 'expanded', 'density'].includes(prop),
})<{ hoverHighlight: boolean; expanded: boolean; density: Density }>`
  ${p =>
    p.hoverHighlight &&
    !p.expanded &&
    `&:hover {
        background: ${p.theme.color.tableRowHover};
      }`};

  padding-top: ${p => getDensityPaddings(p.density)}px;
  padding-bottom: ${p => getDensityPaddings(p.density)}px;

  border-left: ${p => p.theme.spacing.unit(0.5)}px solid
    ${p => (p.expanded ? p.theme.color.cta : 'transparent')};
`;

export const Row: RowComponent = ({
  className,
  expanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  separatorColor = theme => theme.color.divider,
  expandChildren,
  expandItems,
  children,
  ...htmlProps
}) => {
  const { density } = useFlexTable();
  return (
    <StyledRow
      className={className}
      hideSeparator={hideSeparator}
      role="row"
      expanded={expanded}
      separatorColor={separatorColor}
      {...htmlProps}
    >
      <StyledFlexbox
        container
        gutter={2}
        alignItems="center"
        hoverHighlight={hoverHighlight}
        expanded={expanded}
        density={density}
      >
        {children}
      </StyledFlexbox>
      {expanded && (
        <Box px={4} pb={2}>
          {expandItems && <ExpandItems items={expandItems} />}
          {expandChildren}
        </Box>
      )}
    </StyledRow>
  );
};
