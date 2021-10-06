import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledG = styled.g<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `stroke: ${strokeColor};`;
  }}
`;

export const SellingpointFunds = ({ color, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 22 22">
      <StyledG
        strokeColorFn={color || (() => '#28282A')}
        transform="translate(1.5 1.5)"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M9.333 0a9.333 9.333 0 109.334 9.333M18.517 7.658A9.344 9.344 0 0011.233.194" />
        <circle cx="9.333" cy="9.333" r="2" />
      </StyledG>
    </IconBase>
  );
};

SellingpointFunds.displayName = 'Icon.SellingpointFunds';
