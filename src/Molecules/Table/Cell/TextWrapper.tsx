import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../..';
import { TextWrapperComponent } from './Cell.types';
import { getDensityPaddings, getFontSizeTypographyType } from '../shared/textUtils';
import { Density } from '../shared/shared.types';

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: p => !['density'].includes(p),
})<{ density: Density }>`
  padding-top: ${p => getDensityPaddings(p.density)}px;
  padding-bottom: ${p => getDensityPaddings(p.density)}px;
  display: inline-block;
`;

export const TextWrapper: TextWrapperComponent = ({ fontSize = 'm', density = 'm', children }) => (
  <StyledTypography
    type={getFontSizeTypographyType(fontSize)}
    density={density}
    color={t => t.color.text}
  >
    {children}
  </StyledTypography>
);
