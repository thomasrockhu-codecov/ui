import React from 'react';
import styled, { css } from 'styled-components';
import { FontSize } from '../../../shared/shared.types';
import { Typography } from '../../../../../index';
import { TextComponent } from './ExpandItems.types';
import { Theme } from '../../../../../theme/theme.types';

const getFontSizeStyles = (fontSize: FontSize, theme: Theme) => {
  if (fontSize !== 'm') {
    return `
      font-size: 12px;
      line-height: ${theme.spacing.unit(4)}px;
      font-weight: 400;
    `;
  }
  return `
    font-size: 14px;
    line-height: ${theme.spacing.unit(5)}px;
    font-weight: 400;
  `;
};

const getStylesForSize = (size: string) => css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    ${(p) => (p[`$${size}`].fontSize ? getFontSizeStyles(p[`$${size}`].fontSize, p.theme) : '')}
  }
`;

const StyledTypography = styled(Typography)<{
  $fontSize: FontSize;
  $sm: any;
  $md: any;
  $lg: any;
  $xl: any;
}>`
  ${(p) => getFontSizeStyles(p.$fontSize, p.theme)}
  ${(p) => (p.$sm ? getStylesForSize('sm') : '')}
  ${(p) =>
    p.$md ? getStylesForSize('md') : ''}
  ${(p) => (p.$lg ? getStylesForSize('lg') : '')}
  ${(p) =>
    p.$xl ? getStylesForSize('xl') : ''}
`;

const Text: TextComponent = ({ className, color, weight, fontSize, sm, md, lg, xl, children }) => (
  <StyledTypography
    className={className}
    color={color}
    weight={weight}
    $fontSize={fontSize}
    $sm={sm}
    $md={md}
    $lg={lg}
    $xl={xl}
  >
    {children}
  </StyledTypography>
);

export default Text;
