import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { isElement, isFunction } from '../../../../common/utils';
import { StyledBaseBadgeProps, NotificationBadgeComponent } from './NotificationBadge.types';
import { BaseBadge } from '../BaseBadge';
import {
  MAP_FONT_SIZE,
  MAP_BADGE_PADDING,
  DEFAULT_PADDING,
  DEFAULT_TYPOGRAPHY_TYPE,
  NotificationBadgeSize,
} from './NotificationBadge.constants';

const mapToBaseBadge = (badgeSize?: keyof typeof NotificationBadgeSize) => {
  switch (badgeSize) {
    case 'xs':
      return NotificationBadgeSize.xs;
    case 's':
      return NotificationBadgeSize.s;
    case 'm':
      return NotificationBadgeSize.m;
    case 'l':
      return NotificationBadgeSize.l;
    default:
      return NotificationBadgeSize.m;
  }
};

const animation = css`
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    1% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: scale 0.5s ease-out;
`;

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  ${({ $animateOnChange }) => ($animateOnChange ? animation : '')}
  ${(p) => (p.$padding ? `padding: 0 ${p.theme.spacing.unit(p.$padding)}px;` : '')}
  min-width: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
`;

const NotificationBadgeContent: React.FC<{
  color?: ColorFn;
  typographyType: React.ComponentProps<typeof Typography>['type'];
}> = ({ children, color, typographyType }) => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  // default textcolor to textLight
  const textColor: ColorFn = (t) => (color ? color(t) : t.color.textLight);

  return (
    <Typography type={typographyType} color={textColor} weight="bold">
      {children}
    </Typography>
  );
};

export const NotificationBadge: NotificationBadgeComponent = ({
  badgeColor,
  color,
  children,
  badgeSize,
  animateOnChange = false,
  ...htmlProps
}) => {
  const textColorOnParent = isFunction(children) || isElement(children);

  const notificationBadgeSize = (() => {
    if (typeof children === 'undefined' && typeof badgeSize === 'undefined') {
      return mapToBaseBadge('xs');
    }
    return typeof badgeSize === 'number' ? badgeSize : mapToBaseBadge(badgeSize);
  })();

  const typographyType = MAP_FONT_SIZE[notificationBadgeSize] ?? DEFAULT_TYPOGRAPHY_TYPE;
  const padding = MAP_BADGE_PADDING[notificationBadgeSize] ?? DEFAULT_PADDING;

  return (
    <StyledBaseBadge
      $animateOnChange={animateOnChange}
      $padding={padding}
      badgeSize={notificationBadgeSize}
      badgeColor={badgeColor}
      {...(textColorOnParent && { color })}
      {...htmlProps}
    >
      <NotificationBadgeContent typographyType={typographyType} color={color}>
        {children}
      </NotificationBadgeContent>
    </StyledBaseBadge>
  );
};
