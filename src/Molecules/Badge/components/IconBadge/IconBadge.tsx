import React from 'react';
import styled from 'styled-components';
import { IconBadgeComponent } from './IconBadge.types';
import { BaseBadge } from '..';
import { IconBadgeSize } from './IconBadge.constants';

const StyledBaseBadge = styled(BaseBadge)`
  ${(p) =>
    typeof p.badgeSize !== 'undefined' ? `width: ${p.theme.spacing.unit(p.badgeSize)}px;` : ''}
`;

const mapToBaseBadge = (badgeSize?: keyof typeof IconBadgeSize) => {
  switch (badgeSize) {
    case 's':
      return IconBadgeSize.s;
    case 'm':
      return IconBadgeSize.m;
    case 'l':
      return IconBadgeSize.l;
    case 'xl':
      return IconBadgeSize.xl;
    default:
      return IconBadgeSize.m;
  }
};

export const IconBadge: IconBadgeComponent = ({ children, badgeSize, badgeColor }) => {
  const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);

  return (
    <StyledBaseBadge
      badgeColor={(t) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={baseBadgeSize}
    >
      {children}
    </StyledBaseBadge>
  );
};
