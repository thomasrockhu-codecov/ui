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

export const Global = ({ ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <StyledPath
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm0 0c2.21 0 4-5.373 4-12S18.21 4 16 4s-4 5.373-4 12 1.79 12 4 12zM4 16c0 2.21 5.373 4 12 4s12-1.79 12-4-5.373-4-12-4-12 1.79-12 4z"
        strokeWidth="2"
      />
    </IconBase>
  );
};

Global.displayName = 'OldIcon.Global';
