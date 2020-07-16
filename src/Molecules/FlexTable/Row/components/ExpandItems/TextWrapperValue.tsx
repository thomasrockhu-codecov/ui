import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../..';
import { FontSize } from '../../../shared/shared.types';
import { getFontSizeTypographyType } from '../../../shared/textUtils';

const StyledTypography = styled(Typography)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const TextWrapperValue: React.FC<{ fontSize: FontSize }> = ({ fontSize, children }) => (
  <StyledTypography type={getFontSizeTypographyType(fontSize)}>{children}</StyledTypography>
);
