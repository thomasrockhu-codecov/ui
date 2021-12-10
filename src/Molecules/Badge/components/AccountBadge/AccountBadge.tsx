import React from 'react';
import styled from 'styled-components';
import { AccountBadgeComponent } from './AccountBadge.types';
import { BaseBadge } from '..';
import { Typography } from '../../../..';
import { isElement, isFunction } from '../../../../common/utils';
import { AccountBadgeSize } from './AccountBadge.constants';

const StyledTypography = styled(Typography)`
  font-weight: 800;
`;

const mapToBaseBadge = (badgeSize?: keyof typeof AccountBadgeSize) => {
  switch (badgeSize) {
    case 's':
      return AccountBadgeSize.s;
    case 'm':
      return AccountBadgeSize.m;
    case 'l':
      return AccountBadgeSize.l;
    default:
      return AccountBadgeSize.m;
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
  const typographyType = baseBadgeSize === AccountBadgeSize.l ? 'tertiary' : 'caption';

  return (
    <BaseBadge
      badgeColor={(t: any) => (badgeColor ? badgeColor(t) : t.color.cta)}
      badgeSize={baseBadgeSize}
      symmetricShape
    >
      <AccountBadgeContent typographyType={typographyType}>{children}</AccountBadgeContent>
    </BaseBadge>
  );
};
