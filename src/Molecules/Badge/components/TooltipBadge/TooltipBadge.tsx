import React from 'react';
import styled from 'styled-components';
import { TooltipBadgeComponent } from './TooltipBadge.types';
import { BaseBadge } from '..';
import { Typography } from '../../../..';
import { TooltipBadgeSize } from './TooltipBadge.constants';

const StyledTypography = styled(Typography)<{ $addHoverEffect: boolean }>`
  font-weight: 800;
`;

const StyledBaseBadge = styled(BaseBadge)<{ $addHoverEffect: boolean }>`
  ${(p) =>
    typeof p.badgeSize !== 'undefined' ? `width: ${p.theme.spacing.unit(p.badgeSize)}px;` : ''}
  border: 1px solid ${(p) => p.theme.color.bubbleBorder};
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

const mapToBaseBadge = (badgeSize?: keyof typeof TooltipBadgeSize) => {
  switch (badgeSize) {
    case 's':
      return TooltipBadgeSize.s;
    case 'l':
      return TooltipBadgeSize.l;
    default:
      return TooltipBadgeSize.l;
  }
};

export const TooltipBadge: TooltipBadgeComponent = ({ badgeSize }) => {
  const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);
  const typographyType = baseBadgeSize === TooltipBadgeSize.s ? 'caption' : 'secondary';
  const addHoverEffect = baseBadgeSize !== TooltipBadgeSize.s;

  return (
    <StyledBaseBadge
      badgeColor={(t) => t.color.bubbleBackground}
      badgeSize={baseBadgeSize}
      $addHoverEffect={addHoverEffect}
    >
      <StyledTypography type={typographyType} $addHoverEffect={addHoverEffect}>
        ?
      </StyledTypography>
    </StyledBaseBadge>
  );
};
