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

export const CheckMarkCircle = ({ fill, stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <StyledPath
          d="M12 23.87c6.627 0 12-5.315 12-11.87C24 5.445 18.627.13 12 .13S0 5.445 0 12c0 6.555 5.373 11.87 12 11.87z"
          strokeColorFn={fill || (() => '#28282A')}
        />
        <StyledPath
          d="M16.474 8.87l.933.927L11 16.174l-3.88-3.861.933-.928L11 14.318z"
          strokeColorFn={stroke || (() => '#FFF')}
        />
      </g>
    </IconBase>
  );
};

CheckMarkCircle.displayName = 'Icon.CheckMarkCircle';
