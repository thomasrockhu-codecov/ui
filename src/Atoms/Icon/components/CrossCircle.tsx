import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const CrossCircle = ({ fill, stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <StyledPath
          d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"
          strokeColorFn={fill || (() => '#28282A')}
        />
        <StyledPath
          d="M7.826 8.897l.922-.922 3.177 3.178 3.178-3.178.922.922-3.178 3.178 3.178 3.177-.922.922-3.178-3.177-3.177 3.177-.922-.922 3.177-3.177-3.177-3.178z"
          strokeColorFn={stroke || (() => '#FFF')}
        />
      </g>
    </IconBase>
  );
};

CrossCircle.displayName = 'Icon.CrossCircle';
