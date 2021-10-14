import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `stroke: ${strokeColor};`;
  }}
`;

export const Lock = ({ ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <StyledPath d="M5 5a3 3 0 016 0h2A5 5 0 003 5h2z" />
      <StyledPath fillRule="evenodd" clipRule="evenodd" d="M0 6v10h16V6H0zm2 8V8h12v6H2z" />
    </IconBase>
  );
};

Lock.displayName = 'OldIcon.Lock';
