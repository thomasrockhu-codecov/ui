import React from 'react';
import styled from 'styled-components';
import { RowComponent } from './Row.types';
import { Box, Flexbox } from '../../../index';
import { ColorFn } from '../../../common/Types/sharedTypes';

/* the cells are padded by row gutter 1 unit (4px) */
const StyledRow = styled('div').withConfig({
  shouldForwardProp: prop => !['hideSeparator', 'expanded', 'separatorColor'].includes(prop),
})<{ hideSeparator: boolean; expanded: boolean; separatorColor: ColorFn }>`
  ${p =>
    !p.hideSeparator && !p.expanded ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : ''};

  padding-right: ${p => p.theme.spacing.unit(1)}px;
  padding-left: ${p => p.theme.spacing.unit(0.5)}px;
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid
    ${p => (p.expanded ? p.theme.color.cta : 'transparent')};

  &:hover {
    background: ${p => p.theme.color.tableRowHover};
  }
`;

export const Row: RowComponent = ({
  className,
  expanded = false,
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
