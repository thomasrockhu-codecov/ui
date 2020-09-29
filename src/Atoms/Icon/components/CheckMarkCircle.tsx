import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPolygon = styled.polygon<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const CheckMarkCircle = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 92 92">
      <path d="M46 91.5c25.4050985 0 46-20.3710439 46-45.5S71.4050985.5 46 .5 0 20.8710439 0 46s20.5949015 45.5 46 45.5z" />
      <path
        fill="#FFF"
        d="M63.1517377 34l3.573537 3.5568749L42.1676463 62l-14.870943-14.8016051 3.573537-3.5568749 11.297406 11.2447302z"
      />
      <StyledPolygon
        strokeColorFn={stroke}
        points="13.695 6 15 7.314 8.696 13.69 5 9.924 6.319 8.656 8.696 11.059"
      />
    </IconBase>
  );
};

CheckMarkCircle.displayName = 'Icon.CheckMarkCircle';
