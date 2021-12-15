import React from 'react';
import styled from 'styled-components';
import {
  BaseBadgeComponent,
  BaseBadgeProps,
  WrapperComponent,
  WrapperProps,
} from './BaseBadge.types';

const Wrapper: WrapperComponent = styled.span<WrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  background-color: ${(p) => p.$badgeColor(p.theme)};
  ${(p) => (p.$badgeSize ? `height: ${p.theme.spacing.unit(p.$badgeSize)}px;` : '')}
  ${(p) => (p.$applyWidth && p.$badgeSize ? `width: ${p.theme.spacing.unit(p.$badgeSize)}px;` : '')}
  ${(p) =>
    p.$applyMinWidth && p.$badgeSize ? `min-width: ${p.theme.spacing.unit(p.$badgeSize)}px;` : ''}
  ${(p) => (p.$color ? `color: ${p.$color(p.theme)};` : '')}
  ${(p) =>
    p.$variant === 'circle'
      ? `border-radius: ${p.$badgeSize ? `${p.theme.spacing.unit(p.$badgeSize)}px` : '1em'}`
      : ''};
`;

export const BaseBadge: BaseBadgeComponent = React.forwardRef<HTMLSpanElement, BaseBadgeProps>(
  (
    {
      children,
      color, // no default to allow color from parent
      badgeColor = (t) => t.color.cta,
      badgeSize, // no default to allow height set by line-height (e.g. LabelBadge)
      variant = 'circle',
      weight,
      symmetricShape = false,
      ...htmlProps
    },
    ref,
  ) => {
    const applyWidth = !!badgeSize && symmetricShape;
    const applyMinWidth = !!badgeSize && !symmetricShape;

    return (
      <Wrapper
        {...htmlProps}
        ref={ref}
        $badgeSize={badgeSize}
        $color={color}
        $badgeColor={badgeColor}
        $variant={variant}
        $weight={weight}
        $applyWidth={applyWidth}
        $applyMinWidth={applyMinWidth}
      >
        {children}
      </Wrapper>
    );
  },
);
