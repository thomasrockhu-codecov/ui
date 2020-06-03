import React from 'react';
import styled from 'styled-components';
import Flexbox from '../../../Atoms/Flexbox';
import { RowComponent, Density } from './Row.types';
import { Box } from '../../../index';

const getDensityHeight = (density: Density) => {
  switch (density) {
    case 's':
      return 5;
    case 'm':
      return 8;
    case 'l':
      return 10;
    default:
      return 8;
  }
};

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

const StyledFlexbox = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['density'].includes(prop),
})<{ density: Density }>`
  height: ${p => p.theme.spacing.unit(getDensityHeight(p.density))}px;
`;

const ExpandedContent = styled('div')``;

export const Row: RowComponent = ({
  className,
  expanded = false,
  density = 'm',
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
      <StyledFlexbox container density={density} alignItems="center">
        {children}
      </StyledFlexbox>
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
