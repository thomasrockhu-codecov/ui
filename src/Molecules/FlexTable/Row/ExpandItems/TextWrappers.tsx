import React from 'react';
import styled from 'styled-components';
import { Typography, Media } from '../../../..';

const StyledTypography = styled(Typography)`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const TextWrapperLabel: React.FC = ({ children }) => (
  <StyledTypography type="tertiary" color={t => t.color.label}>
    {children}
  </StyledTypography>
);

export const TextWrapperValue: React.FC = ({ children }) => (
  <>
    <Media query={t => t.media.lessThan(t.breakpoints.md)}>
      <StyledTypography type="tertiary">{children}</StyledTypography>
    </Media>
    <Media query={t => t.media.greaterThan(t.breakpoints.md)}>
      <StyledTypography type="secondary">{children}</StyledTypography>
    </Media>
  </>
);
