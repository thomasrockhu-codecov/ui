import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../..';
import { getFontSizeTypographyType } from '../../../shared/textUtils';
import { FontSize } from '../../../shared/shared.types';

const StyledTypography = styled(Typography)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const TextWrapperLabel: React.FC<{ fontSize: FontSize }> = ({ fontSize, children }) => (
  <StyledTypography type={getFontSizeTypographyType(fontSize)} color={t => t.color.label}>
    {children}
  </StyledTypography>
);

export const TextWrapperValue: React.FC<{ fontSize: FontSize }> = ({ fontSize, children }) => (
  <StyledTypography type={getFontSizeTypographyType(fontSize)}>{children}</StyledTypography>
);
