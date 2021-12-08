import React from 'react';
import styled from 'styled-components';
import { AccountBadgeComponent, StyledBaseBadgeProps } from './AccountBadge.types';
import { BaseBadge } from '..';
import { Typography } from '../../../..';
import { isElement, isFunction } from '../../../../common/utils';

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  width: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
`;

const StyledTypography = styled(Typography)`
  font-weight: 800;
`;

const mapToBaseBadge = (badgeSize?: string) => {
  switch (badgeSize) {
    case 's':
      return 6;
    case 'm':
      return 8;
    case 'l':
      return 12;
    default:
      return 8;
  }
};

const AccountBadgeContent: React.FC<{
  typographyType: React.ComponentProps<typeof Typography>['type'];
}> = ({ children, typographyType }) => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  return (
    <StyledTypography type={typographyType} color={(t) => t.color.textLight}>
      {children}
    </StyledTypography>
  );
};

export const AccountBadge: AccountBadgeComponent = ({ children, badgeSize, badgeColor }) => {
  const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);
  const typographyType = baseBadgeSize === 12 ? 'tertiary' : 'caption';

  return (
    <StyledBaseBadge
      backgroundColor={(t: any) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={baseBadgeSize}
    >
      <AccountBadgeContent typographyType={typographyType}>{children}</AccountBadgeContent>
    </StyledBaseBadge>
  );
};
