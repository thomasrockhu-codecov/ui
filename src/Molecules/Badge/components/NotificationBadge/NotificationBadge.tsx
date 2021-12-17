import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { isElement, isFunction } from '../../../../common/utils';
import {
  StyledBaseBadgeProps,
  XSProps,
  Props,
  NotificationBadgeComponent,
} from './NotificationBadge.types';
import { BaseBadge } from '../BaseBadge';
import {
  MAP_FONT_SIZE,
  MAP_BADGE_PADDING,
  DEFAULT_PADDING,
  DEFAULT_TYPOGRAPHY_TYPE,
  NotificationBadgeSize,
} from './NotificationBadge.constants';

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
`;

const NotificationBadgeContent: React.FC<{
  color?: ColorFn;
  typographyType: React.ComponentProps<typeof Typography>['type'];
}> = ({ children, color, typographyType }) => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  // default textcolor to badgeTextColor
  const textColor: ColorFn = (t) => (color ? color(t) : t.color.badgeTextColor);

  return (
    <Typography type={typographyType} color={textColor} weight="bold">
      {children}
    </Typography>
  );
};

export const NotificationBadge: NotificationBadgeComponent = React.forwardRef<
  HTMLSpanElement,
  XSProps | Props
>(
  (
    {
      badgeColor = (t) => t.color.badgeBackground,
      color = (t) => t.color.badgeTextColor,
      children,
      badgeSize = 'm',
      animateOnChange = false,
      symmetricShape = false,
      ...htmlProps
    },
    ref,
  ) => {
    const textColorOnParent = isFunction(children) || isElement(children);

    const notificationBadgeSize =
      typeof badgeSize === 'number' ? badgeSize : NotificationBadgeSize[badgeSize];

    const typographyType = MAP_FONT_SIZE[notificationBadgeSize] ?? DEFAULT_TYPOGRAPHY_TYPE;
    const padding = MAP_BADGE_PADDING[notificationBadgeSize] ?? DEFAULT_PADDING;

    return (
      <StyledBaseBadge
        {...htmlProps}
        ref={ref}
        $animateOnChange={animateOnChange}
        $padding={padding}
        badgeSize={notificationBadgeSize}
        badgeColor={badgeColor}
        symmetricShape={symmetricShape}
        {...(textColorOnParent && { color })}
      >
        <NotificationBadgeContent typographyType={typographyType} color={color}>
          {children}
        </NotificationBadgeContent>
      </StyledBaseBadge>
    );
  },
  // re-cast explicitly since the intersection type (XSProps | Props) messes up forwardRef typing
) as NotificationBadgeComponent;
