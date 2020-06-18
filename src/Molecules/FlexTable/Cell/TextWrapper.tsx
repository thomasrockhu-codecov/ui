import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../..';
import { TextWrapperComponent } from './Cell.types';
import { getFontSizeTypographyType } from '../shared/textUtils';

const StyledTypography = styled(Typography)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TextWrapper: TextWrapperComponent = ({ fontSize = 'm', children }) => (
  <StyledTypography type={getFontSizeTypographyType(fontSize)} color={t => t.color.text}>
    {children}
  </StyledTypography>
);
