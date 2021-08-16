import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../../..';

const StyledOptionGroup = styled(Typography)<{ index: number }>`
  display: flex;
  align-items: center;
  padding-right: ${(p) => p.theme.spacing.unit(3)}px;
  padding-left: ${(p) => p.theme.spacing.unit(3)}px;
  padding-top: ${(p) => p.theme.spacing.unit(p.index === 0 ? 1 : 3)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(1)}px;
  color: ${(p) => p.theme.color.label};
  pointer-events: none;
  user-select: none;
`;

export const OptionGroup: React.FC<{ index: number; label: string }> = ({ index, label }) => {
  return (
    <StyledOptionGroup index={index} type="tertiary">
      {label}
    </StyledOptionGroup>
  );
};
