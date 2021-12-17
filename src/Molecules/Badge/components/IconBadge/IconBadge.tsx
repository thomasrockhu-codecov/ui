import React from 'react';
import { IconBadgeComponent, IconBadgeProps } from './IconBadge.types';
import { BaseBadge } from '..';
import { IconBadgeSize } from './IconBadge.constants';

export const IconBadge: IconBadgeComponent = React.forwardRef<HTMLSpanElement, IconBadgeProps>(
  (
    { children, badgeSize = 'm', badgeColor = (t) => t.color.badgeBackground, ...htmlProps },
    ref,
  ) => {
    const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : IconBadgeSize[badgeSize];

    return (
      <BaseBadge
        {...htmlProps}
        ref={ref}
        badgeColor={badgeColor}
        badgeSize={baseBadgeSize}
        symmetricShape
      >
        {children}
      </BaseBadge>
    );
  },
);
