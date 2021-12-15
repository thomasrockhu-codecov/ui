import React from 'react';
import { IconBadgeComponent } from './IconBadge.types';
import { BaseBadge } from '..';
import { IconBadgeSize } from './IconBadge.constants';

export const IconBadge: IconBadgeComponent = ({
  children,
  badgeSize = 'm',
  badgeColor = (t) => t.color.cta,
}) => {
  const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : IconBadgeSize[badgeSize];

  return (
    <BaseBadge badgeColor={badgeColor} badgeSize={baseBadgeSize} symmetricShape>
      {children}
    </BaseBadge>
  );
};
