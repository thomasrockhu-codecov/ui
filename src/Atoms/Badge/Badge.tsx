import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../..';
import { ColorFn } from '../../common/Types';
import { isElement, isFunction } from '../../common/utils';
import { BadgeComponent, StyledBadgeBaseProps } from './Badge.types';
import { BadgeBase } from './components/BadgeBase';

const SMALL_BADGE_SIZE = 2;
const MEDIUM_BADGE_SIZE = 5;

const BADGE_PADDING = 1.5;

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

const StyledBadgeBase: React.FC<StyledBadgeBaseProps> = styled(BadgeBase)<StyledBadgeBaseProps>`
  ${(p) => (p.$applyPadding ? `padding: 0 ${p.theme.spacing.unit(BADGE_PADDING)}px;` : '')}
  ${({ $animateOnChange }) => ($animateOnChange ? animation : '')}
`;

const BadgeContent: React.FC<{ color?: ColorFn; weight?: string }> = ({
  children,
  color,
  weight,
}) => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  // default textcolor to textLight
  const textColor: ColorFn = (t) => (color ? color(t) : t.color.textLight);

  return (
    <Typography type="tertiary" color={textColor} weight={weight}>
      {children}
    </Typography>
  );
};

export const Badge: BadgeComponent = ({
  backgroundColor,
  color,
  children,
  animateOnChange = false,
  weight,
  variant,
  ...htmlProps
}) => {
  // if child is component, color style should apply to parent since Typography doesn't render
  const textColorOnParent = isFunction(children) || isElement(children);

  const badgeSize = typeof children !== 'undefined' ? MEDIUM_BADGE_SIZE : SMALL_BADGE_SIZE;
  const applyPadding = badgeSize === MEDIUM_BADGE_SIZE && variant !== 'square';

  return (
    <StyledBadgeBase
      $animateOnChange={animateOnChange}
      badgeSize={badgeSize}
      $applyPadding={applyPadding}
      backgroundColor={backgroundColor}
      variant={variant}
      {...(textColorOnParent && { color })}
      {...htmlProps}
    >
      <BadgeContent color={color} weight={weight}>
        {children}
      </BadgeContent>
    </StyledBadgeBase>
  );
};
