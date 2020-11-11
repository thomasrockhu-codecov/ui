import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledG = styled.g<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `stroke: ${strokeColor};`;
  }}
`;

export const SellingpointRate = ({ color, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <StyledG
        strokeColorFn={color || (() => '#28282A')}
        transform="translate(1.4 1.5)"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M1.417 17L15.583 0" />
        <circle cx="2.833" cy="2.833" r="2.833" />
        <circle cx="14.167" cy="14.167" r="2.833" />
      </StyledG>
    </IconBase>
  );
};

SellingpointRate.displayName = 'Icon.SellingpointRate';
