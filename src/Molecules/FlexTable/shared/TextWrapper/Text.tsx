import React from 'react';
import styled from 'styled-components';
import { TextComponent } from './TextWrapper.types';
import { FontSize, MediaRelatedProps } from '../shared.types';
import { Theme } from '../../../../theme/theme.types';
import { Typography } from '../../../../index';
import { useFlexTable } from '../FlexTableProvider';
import getStylesForSizes from '../getStylesForSizes';

type ScreenSizeConfigurableProps = {
  fontSize: FontSize;
};

type StyledTypographyProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm?: Partial<ScreenSizeConfigurableProps>;
  $md?: Partial<ScreenSizeConfigurableProps>;
  $lg?: Partial<ScreenSizeConfigurableProps>;
  $xl?: Partial<ScreenSizeConfigurableProps>;
};

const getFontSizeStyles = ({ fontSize, theme }: ScreenSizeConfigurableProps & { theme: Theme }) => {
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

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${(p) =>
    getStylesForSizes<
      { xs: ScreenSizeConfigurableProps } & MediaRelatedProps<ScreenSizeConfigurableProps>
    >(
      {
        theme: p.theme,
        xs: p.$xs,
        sm: p.$sm,
        md: p.$md,
        lg: p.$lg,
        xl: p.$xl,
      },
      {
        fontSize: getFontSizeStyles,
      },
    )}
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
