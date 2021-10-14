import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const WarningTriangle = ({ ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 92 90">
      <path d="M46 0l46 89.3913043H0z" />
      <StyledPath d="M50 63.8333333v8h-8v-8h8zm0-28v24h-8v-24h8z" />
    </IconBase>
  );
};

WarningTriangle.displayName = 'OldIcon.WarningTriangle';
