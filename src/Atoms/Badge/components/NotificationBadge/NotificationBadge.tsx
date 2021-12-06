import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { isElement, isFunction } from '../../../../common/utils';
import { StyledBaseBadgeProps, NotificationBadgeComponent } from './NotificationBadge.types';
import { BaseBadge } from '../BaseBadge';

const MAP_FONT_SIZE = { 2: 'caption', 4: 'caption', 6: 'tertiary', 8: 'secondary' };

const MAP_BADGE_PADDING = {
  2: 0,
  4: 1,
  6: 1.5,
  8: 1.5,
};

const mapToBaseBadge = (badgeSize?: string) => {
  switch (badgeSize) {
    case 'xs':
      return 2;
    case 's':
      return 4;
    case 'm':
      return 6;
    case 'l':
      return 8;
    default:
      return 6;
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
  fontType: React.ComponentProps<typeof Typography>['type'];
}> = ({ children, color, fontType }) => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  // default textcolor to textLight
  const textColor: ColorFn = (t) => (color ? color(t) : t.color.textLight);

  return (
    <Typography type={fontType} color={textColor} weight="bold">
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

  const fontType = MAP_FONT_SIZE[notificationBadgeSize] ?? 'tertiary';
  const padding = MAP_BADGE_PADDING[notificationBadgeSize] ?? 1;

  return (
    <StyledBaseBadge
      $animateOnChange={animateOnChange}
      $padding={padding}
      badgeSize={notificationBadgeSize}
      backgroundColor={badgeColor}
      {...(textColorOnParent && { color })}
      {...htmlProps}
    >
      <NotificationBadgeContent fontType={fontType} color={color}>
        {children}
      </NotificationBadgeContent>
    </StyledBaseBadge>
  );
};
