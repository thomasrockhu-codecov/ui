import React from 'react';
import styled from 'styled-components';
import { TooltipBadgeComponent } from './TooltipBadge.types';
import { BaseBadge } from '..';
import { Typography } from '../../../..';

const StyledTypography = styled(Typography)<{ $addHoverEffect: boolean }>`
  font-weight: 800;
`;

const StyledBaseBadge = styled(BaseBadge)<{ $addHoverEffect: boolean }>`
  ${(p) =>
    typeof p.badgeSize !== 'undefined' ? `width: ${p.theme.spacing.unit(p.badgeSize)}px;` : ''}
  border: 1px solid #BCBCB6;
  ${(p) =>
    p.$addHoverEffect
      ? `
    :hover {
      cursor: pointer;
      border-color: ${p.theme.color.cta};
      ${StyledTypography} {
        color: ${p.theme.color.cta};
      }
    }`
      : ''}
`;

const mapToBaseBadge = (badgeSize?: string) => {
  switch (badgeSize) {
    case 's':
      return 4;
    case 'l':
      return 6;
    default:
      return 6;
  }
};

export const TooltipBadge: TooltipBadgeComponent = ({ badgeSize }) => {
  const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);
  const typographyType = baseBadgeSize === 4 ? 'caption' : 'secondary';
  const addHoverEffect = baseBadgeSize !== 4;

  return (
    <StyledBaseBadge
      backgroundColor={(t) => t.color.bubbleBackground}
      badgeSize={baseBadgeSize}
      $addHoverEffect={addHoverEffect}
    >
      <StyledTypography type={typographyType} $addHoverEffect={addHoverEffect}>
        ?
      </StyledTypography>
    </StyledBaseBadge>
  );
};
