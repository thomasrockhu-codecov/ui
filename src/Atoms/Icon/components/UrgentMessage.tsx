import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.text, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const UrgentMessage = ({ fill, stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 64 64">
      <g fill="none" fillRule="evenodd" clipRule="evenodd">
        <StyledPath
          strokeColorFn={stroke || (() => '#282823')}
          d="M11 18h29v2H14.72L32 34.688l9.56-8.127 1.42 1.419-4.59 3.901L51 42.81V30h2v16H11V18zm2 24.81l12.61-10.929L13 21.162V42.81zm14.152-9.618L14.681 44h34.638L36.85 33.192 32 37.312l-4.848-4.12z"
        />
        <StyledPath
          strokeColorFn={fill || (() => '#FF1900')}
          d="M53.414 12h-6.828L42 16.586v6.828L46.586 28h6.828L58 23.414v-6.828L53.414 12zM49 16v5h2v-5h-2zm0 8v-2h2v2h-2z"
        />
      </g>
    </IconBase>
  );
};

UrgentMessage.displayName = 'Icon.UrgentMessage';
