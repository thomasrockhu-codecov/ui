import React from 'react';
import { FontSize, MediaRelatedProps } from '../../../shared/shared.types';
import { getFontSizeTypographyType } from '../../../shared/textUtils';
import { Typography, TruncateWithTooltip } from '../../../../..';
import { TextComponent, TextWrapperComponent } from './ExpandItems.types';
import styled, { css } from 'styled-components';

const getFontSizeStyles = (fontSize, theme) => {
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

const StyledTypography = styled(Typography)<{ $fontSize; $sm: any; $md: any; $lg: any; $xl: any }>`
  ${(p) => getFontSizeStyles(p.$fontSize, p.theme)}
  ${(p) => (p.$sm ? getStylesForSize('sm') : '')}
  ${(p) =>
    p.$md ? getStylesForSize('md') : ''}
  ${(p) => (p.$lg ? getStylesForSize('lg') : '')}
  ${(p) =>
    p.$xl ? getStylesForSize('xl') : ''}
`;

const Text: TextComponent = ({ fontSize, sm, md, lg, xl, children }) => (
  <StyledTypography
    color={(t) => t.color.label}
    $fontSize={fontSize}
    $sm={sm}
    $md={md}
    $lg={lg}
    $xl={xl}
  >
    {children}
  </StyledTypography>
);

export const TextWrapperLabel: TextWrapperComponent = ({
  fontSize,
  sm,
  md,
  lg,
  xl,
  children,
  truncate = true,
}) => {
  if (!truncate) {
    return (
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl}>
        {children}
      </Text>
    );
  }
  return (
    <TruncateWithTooltip label={children}>
      <Text fontSize={fontSize} sm={sm} md={md} lg={lg} xl={xl}>
        {children}
      </Text>
    </TruncateWithTooltip>
  );
};
