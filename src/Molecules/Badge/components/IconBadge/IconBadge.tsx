import React from 'react';
import { IconBadgeComponent } from './IconBadge.types';
import { BaseBadge } from '..';
import { IconBadgeSize } from './IconBadge.constants';

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
    <BaseBadge
      badgeColor={(t) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={baseBadgeSize}
      symmetricShape
    >
      {children}
    </BaseBadge>
  );
};
