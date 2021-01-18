// import { useEffect } from '@storybook/addons';
import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../..';
import { isElement, isFunction } from '../../common/utils';
import { BadgeComponent, Circle as CircleComponentProps, CircleComponent } from './Badge.types';

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

const Circle: CircleComponent = styled.span<CircleComponentProps>`
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
  ${({ $animateOnChange }) => ($animateOnChange ? animation : '')}
`;

export const Badge: BadgeComponent = ({
  backgroundColor,
  color,
  children,
  animateOnChange = false,
  ...props
}) => {
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

  // if child is component, color style should apply to parent since Typography doesn't render
  const textColorOnParent = isFunction(children) || isElement(children);

  return (
    <Circle
      $animateOnChange={animateOnChange}
      size={typeof children !== 'undefined' ? MEDIUM_BADGE_SIZE : SMALL_BADGE_SIZE}
      backgroundColor={backgroundColor}
      {...(textColorOnParent && { color })}
      {...props}
    >
      <CircleContent />
    </Circle>
  );
};
