import React from 'react';
import styled from 'styled-components';
import { AccountBadgeComponent, AccountBadgeProps } from './AccountBadge.types';
import { BaseBadge } from '..';
import { Typography } from '../../../..';
import { isElement, isFunction } from '../../../../common/utils';
import { AccountBadgeSize } from './AccountBadge.constants';

const StyledTypography = styled(Typography)`
  font-weight: 800;
`;

const AccountBadgeContent: React.FC<{
  typographyType: React.ComponentProps<typeof Typography>['type'];
}> = ({ children, typographyType }) => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  return (
    <StyledTypography type={typographyType} color={(t) => t.color.badgeTextColor}>
      {children}
    </StyledTypography>
  );
};

export const AccountBadge: AccountBadgeComponent = React.forwardRef<
  HTMLSpanElement,
  AccountBadgeProps
>(
  (
    { children, badgeSize = 'm', badgeColor = (t) => t.color.badgeBackground, ...htmlProps },
    ref,
  ) => {
    const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : AccountBadgeSize[badgeSize];
    const typographyType = baseBadgeSize === AccountBadgeSize.l ? 'tertiary' : 'caption';

    return (
      <BaseBadge
        {...htmlProps}
        ref={ref}
        badgeColor={(t) => (badgeColor ? badgeColor(t) : t.color.badgeBackground)}
        badgeSize={baseBadgeSize}
        symmetricShape
      >
        <AccountBadgeContent typographyType={typographyType}>{children}</AccountBadgeContent>
      </BaseBadge>
    );
  },
);
