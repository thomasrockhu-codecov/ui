import React from 'react';
import styled from 'styled-components';
import { BaseBadgeComponent, WrapperComponent, WrapperProps } from './BaseBadge.types';

const Wrapper: WrapperComponent = styled.span<WrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  ${(p) => (p.$badgeSize ? `height: ${p.theme.spacing.unit(p.$badgeSize)}px;` : '')}
  background-color: ${(p) => (p.$badgeColor ? p.$badgeColor(p.theme) : p.theme.color.cta)};
  ${(p) => (p.$color ? `color: ${p.$color(p.theme)};` : '')}
  ${(p) =>
    p.$variant !== 'square' && p.$variant !== 'rect' && typeof p.$badgeSize !== 'undefined'
      ? `border-radius: ${p.theme.spacing.unit(p.$badgeSize)}px`
      : ''};
`;

export const BaseBadge: BaseBadgeComponent = ({
  children,
  color,
  secondaryColor,
  badgeColor,
  badgeSize,
  variant,
  weight,
  ...htmlProps
}) => (
  <Wrapper
    $badgeSize={badgeSize}
    $color={color}
    $secondaryColor={secondaryColor}
    $badgeColor={badgeColor}
    $variant={variant}
    $weight={weight}
    {...htmlProps}
  >
    {children}
  </Wrapper>
);
