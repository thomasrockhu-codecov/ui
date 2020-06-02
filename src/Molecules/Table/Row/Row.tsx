import React from 'react';
import styled from 'styled-components';
import Flexbox from '../../../Atoms/Flexbox';
import { RowComponent, Density } from './Row.types';
import { Box } from '../../../index';

const getDensityPaddings = (density: Density) => {
  switch (density) {
    case 's':
      return 0;
    case 'm':
      return 1;
    case 'l':
      return 2;
    default:
      return 1;
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
  padding-top: ${p => p.theme.spacing.unit(getDensityPaddings(p.density))}px;
  padding-bottom: ${p => p.theme.spacing.unit(getDensityPaddings(p.density))}px;
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
      <StyledFlexbox container density={density}>
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
