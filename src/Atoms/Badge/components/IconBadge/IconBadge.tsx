import React from 'react';
import styled from 'styled-components';
import { IconBadgeComponent } from './IconBadge.types';
import { BaseBadge } from '..';

const StyledBaseBadge = styled(BaseBadge)`
  ${(p) =>
    typeof p.badgeSize !== 'undefined' ? `width: ${p.theme.spacing.unit(p.badgeSize)}px;` : ''}
`;

const mapToBaseBadge = (badgeSize?: string) => {
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
  const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);

  return (
    <StyledBaseBadge
      backgroundColor={(t: any) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={baseBadgeSize}
    >
      {children}
    </StyledBaseBadge>
  );
};
