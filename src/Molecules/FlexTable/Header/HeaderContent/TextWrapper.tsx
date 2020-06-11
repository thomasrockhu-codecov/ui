import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../..';
import { getDensityPaddings, getFontSizeTypographyType } from '../../shared/textUtils';
import { Density } from '../../shared/shared.types';
import { TextWrapperComponent } from './HeaderContent.types';

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: p => !['density'].includes(p),
})<{ density: Density }>`
  padding-top: ${p => getDensityPaddings(p.density)}px;
  padding-bottom: ${p => getDensityPaddings(p.density)}px;
  display: inline-block;
  word-break: break-word;
`;

export const TextWrapper: TextWrapperComponent = ({
  fontSize = 'm',
  density = 'm',
  sorted,
  children,
}) => (
  <StyledTypography
    type={getFontSizeTypographyType(fontSize)}
    density={density}
    color={t => (sorted ? t.color.text : t.color.label)}
    weight={sorted ? 'bold' : 'regular'}
  >
    {children}
  </StyledTypography>
);
