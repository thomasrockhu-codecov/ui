import React from 'react';
import styled from 'styled-components';
import { IconBadgeComponent } from './IconBadge.types';
import { BadgeBase } from '..';

const StyledBadgeBase = styled(BadgeBase)`
  width: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
`;

const mapToBadgeBase = (badgeSize?: string) => {
  switch (badgeSize) {
    case 's':
      return 8;
    case 'm':
      return 10;
    case 'l':
      return 12;
    case 'xl':
      return 20;
    default:
      return 10;
  }
};

export const IconBadge: IconBadgeComponent = ({ children, badgeSize, badgeColor }) => {
  const badgeBase = typeof badgeSize === 'number' ? badgeSize : mapToBadgeBase(badgeSize);

  return (
    <StyledBadgeBase
      backgroundColor={(t: any) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={badgeBase}
    >
      {children}
    </StyledBadgeBase>
  );
};
