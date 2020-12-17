// import { useEffect } from '@storybook/addons';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../..';
import { isElement, isFunction } from '../../common/utils';
import { BadgeComponent, Props as BadgeComponentProps } from './Badge.types';

const SMALL_BADGE_SIZE = 2;
const MEDIUM_BADGE_SIZE = 5;

const BADGE_PADDING = 1.5;

const Circle: BadgeComponent = styled.span<BadgeComponentProps & { size: number }>`
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    5% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }

  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor(p.theme) : p.theme.color.cta)};
  border-radius: ${(p) => p.theme.spacing.unit(p.size)}px;
  text-align: center;
  height: ${(p) => p.theme.spacing.unit(p.size)}px;
  min-width: ${(p) => p.theme.spacing.unit(p.size)}px;
  box-sizing: border-box;
  ${(p) => (p.color ? `color ${p.color(p.theme)};` : '')}
  ${(p) => {
    const shouldHavePadding = p.size === MEDIUM_BADGE_SIZE;
    return shouldHavePadding ? `padding: 0 ${p.theme.spacing.unit(BADGE_PADDING)}px` : '';
  }};
  ${($animate) => ($animate ? `animation: scale 2s ease-in-out;` : '')}
`;

export const Badge: BadgeComponent = ({ backgroundColor, color, children, ...props }) => {
  const [animate, setAnimate] = useState(true);

  const CircleContent = () => {
    if (typeof children === 'undefined') return null;
    if (isFunction(children)) return children();
    if (isElement(children)) return children;

    return (
      <Typography type="tertiary" color={(t) => (color ? color(t) : t.color.textLight)}>
        {children}
      </Typography>
    );
  };
  useEffect(() => {
    setAnimate(true);
  }, [children]);

  // if child is component, color style should apply to parent since Typography doesn't render
  const textColorOnParent = isFunction(children) || isElement(children);

  return (
    <Circle
      $animate={animate}
      onAnimationEnd={() => setAnimate(false)}
      size={typeof children !== 'undefined' ? MEDIUM_BADGE_SIZE : SMALL_BADGE_SIZE}
      backgroundColor={backgroundColor}
      {...(textColorOnParent && { color })}
      {...props}
    >
      <CircleContent />
    </Circle>
  );
};
