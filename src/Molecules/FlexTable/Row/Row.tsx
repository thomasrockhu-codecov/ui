import React from 'react';
import styled from 'styled-components';
import { RowComponent } from './Row.types';
import { Box, Flexbox } from '../../../index';
import { ColorFn } from '../../../common/Types/sharedTypes';

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled('div').withConfig({
  shouldForwardProp: prop =>
    !['hideSeparator', 'expanded', 'separatorColor', 'hoverHighlight'].includes(prop),
})<{ hideSeparator: boolean; expanded: boolean; separatorColor: ColorFn; hoverHighlight: boolean }>`
  ${p =>
    !p.hideSeparator && !p.expanded ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : ''};

  ${p => (p.expanded ? p.theme.color.cta : 'transparent')};

  ${p =>
    p.hoverHighlight &&
    `&:hover {
        background: ${p.theme.color.tableRowHover};
      }`};

  padding-right: ${p => p.theme.spacing.unit(1)}px;
  padding-left: ${p => p.theme.spacing.unit(0.5)}px;
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid;
`;

export const Row: RowComponent = ({
  className,
  expanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  separatorColor = theme => theme.color.divider,
  expandableContent,
  children,
  ...htmlProps
}) => {
  return (
    <StyledRow
      className={className}
      hideSeparator={hideSeparator}
      role="row"
      expanded={expanded}
      hoverHighlight={hoverHighlight}
      separatorColor={separatorColor}
      {...htmlProps}
    >
      <Flexbox container gutter={2} alignItems="center">
        {children}
      </Flexbox>
      {expanded && (
        <Box px={4} pb={2}>
          {expandableContent}
        </Box>
      )}
    </StyledRow>
  );
};
