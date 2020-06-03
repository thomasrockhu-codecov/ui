import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../..';
import { TextWrapperProps, Density } from './Header.types';
import {
  DENSITY_PADDING_LARGE,
  DENSITY_PADDING_SMALL,
  DENSITY_PADDING_MEDIUM,
} from '../shared/constants';

const getDensityPaddings = (density: Density) => {
  switch (density) {
    case 's':
      return DENSITY_PADDING_SMALL;
    case 'm':
      return DENSITY_PADDING_MEDIUM;
    case 'l':
      return DENSITY_PADDING_LARGE;
    default:
      return 1;
  }
};

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: p => !['density'].includes(p),
})<{ density: Density }>`
  padding-top: ${p => getDensityPaddings(p.density)}px;
  padding-bottom: ${p => getDensityPaddings(p.density)}px;
`;

export const TextWrapper: React.FC<TextWrapperProps> = ({
  fontSize,
  density = 'm',
  sorted,
  children,
}) => (
  <StyledTypography
    type={fontSize === 'l' ? 'secondary' : 'tertiary'}
    density={density}
    color={t => (sorted ? t.color.text : t.color.label)}
  >
    {children}
  </StyledTypography>
);
