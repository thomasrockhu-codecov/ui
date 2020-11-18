import React from 'react';
import styled, { css } from 'styled-components';
import { TextComponent } from './TextWrapper.types';
import { FontSize } from '../shared.types';
import { Theme } from '../../../../theme/theme.types';
import { Typography } from '../../../../index';
import { useFlexTable } from '../FlexTableProvider';

type StyledTypographyProps = {
  $xs: any;
  $sm: any;
  $md: any;
  $lg: any;
  $xl: any;
};

const getFontSizeStyles = (fontSize: FontSize, theme: Theme) => {
  if (fontSize === 's') {
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

const getStyles = (size: string, p: StyledTypographyProps & { theme: Theme }) => {
  return `${p[`$${size}`].fontSize ? getFontSizeStyles(p[`$${size}`].fontSize, p.theme) : ''}`;
};

const getStylesForSize = (size: string) => css<StyledTypographyProps>`
  ${(p) => {
    const styles = getStyles(size, p);
    if (size !== 'xs') {
      return `${p.theme.media.greaterThan(p.theme.breakpoints[size])} { ${styles} }`;
    }
    return styles;
  }}
`;

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${getStylesForSize('xs')}
  ${(p) => (p.$sm ? getStylesForSize('sm') : '')}
  ${(p) =>
    p.$md ? getStylesForSize('md') : ''}
  ${(p) => (p.$lg ? getStylesForSize('lg') : '')}
  ${(p) =>
    p.$xl ? getStylesForSize('xl') : ''}
`;

const Text: TextComponent = ({ className, color, weight, children }) => {
  const { xs, sm, md, lg, xl } = useFlexTable('fontSize');
  return (
    <StyledTypography
      className={className}
      color={color}
      weight={weight}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
    >
      {children}
    </StyledTypography>
  );
};

export default Text;
