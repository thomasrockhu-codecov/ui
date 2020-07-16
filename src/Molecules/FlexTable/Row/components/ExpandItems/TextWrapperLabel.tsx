import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../shared/shared.types';
import { getFontSizeTypographyType } from '../../../shared/textUtils';
import { Typography } from '../../../../..';

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
