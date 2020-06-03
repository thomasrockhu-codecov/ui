import React from 'react';
import styled from 'styled-components';
import Flexbox from '../../../Atoms/Flexbox';
import { RowComponent } from './Row.types';
import { Box } from '../../../index';

const StyledRow = styled('div').withConfig({
  shouldForwardProp: prop => !['hideBorder', 'expanded'].includes(prop),
})<{ hideBorder: boolean; expanded: boolean }>`
  ${p => (!p.hideBorder && !p.expanded ? `border-bottom: 1px solid ${p.theme.color.divider}` : '')};

  padding-right: ${p => p.theme.spacing.unit(2)}px;
  padding-left: ${p => p.theme.spacing.unit(1.5)}px;
  border-left: ${p => p.theme.spacing.unit(0.5)}px solid
    ${p => (p.expanded ? p.theme.color.cta : 'transparent')};

  &:hover {
    background: ${p => p.theme.color.tableRowHover};
  }
`;

const ExpandedContent = styled('div')``;

export const Row: RowComponent = ({
  className,
  expanded = false,
  hideBorder = false,
  expandableContent,
  children,
  ...htmlProps
}) => {
  return (
    <StyledRow
      className={className}
      hideBorder={hideBorder}
      role="row"
      expanded={expanded}
      {...htmlProps}
    >
      <Flexbox container alignItems="center">
        {children}
      </Flexbox>
      {expanded && (
        <ExpandedContent>
          <Box px={3} pb={2}>
            {expandableContent}
          </Box>
        </ExpandedContent>
      )}
    </StyledRow>
  );
};
