import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../..';
import { getFontSizeTypographyType } from '../../shared/textUtils';
import { TextWrapperComponent } from './HeaderContent.types';

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: p => !['density'].includes(p),
})`
  display: inline-block;
  word-break: break-word;
`;

export const TextWrapper: TextWrapperComponent = ({ fontSize = 'm', sorted, children }) => (
  <StyledTypography
    type={getFontSizeTypographyType(fontSize)}
    color={t => (sorted ? t.color.text : t.color.label)}
    weight={sorted ? 'bold' : 'regular'}
  >
    {children}
  </StyledTypography>
);
