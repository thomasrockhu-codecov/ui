import React from 'react';
import styled from 'styled-components';
import { BadgeBaseComponent, WrapperComponent, WrapperProps } from './BadgeBase.types';

const Wrapper: WrapperComponent = styled.span<WrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  height: ${(p) => p.theme.spacing.unit(p.$badgeSize)}px;
  min-width: ${(p) => p.theme.spacing.unit(p.$badgeSize)}px;
  background-color: ${(p) =>
    p.$backgroundColor ? p.$backgroundColor(p.theme) : p.theme.color.cta};
  ${(p) => (p.$color ? `color: ${p.$color(p.theme)};` : '')}
  ${(p) =>
    p.$variant !== 'square' && p.$variant !== 'rect'
      ? `border-radius: ${p.theme.spacing.unit(p.$badgeSize)}px`
      : ''};
`;

export const BadgeBase: BadgeBaseComponent = ({
  children,
  color,
  secondaryColor,
  backgroundColor,
  badgeSize,
  variant,
  weight,
  ...htmlProps
}) => (
  <Wrapper
    $badgeSize={badgeSize}
    $color={color}
    $secondaryColor={secondaryColor}
    $backgroundColor={backgroundColor}
    $variant={variant}
    $weight={weight}
    {...htmlProps}
  >
    {children}
  </Wrapper>
);
