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

export const SellingpointStocks = ({ color, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 15">
      <StyledG
        strokeColorFn={color || (() => '#28282A')}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M1 14.333l6.564-8 6.564 4L22.333 1" />
        <path d="M17 1h5.333v5.333" />
      </StyledG>
    </IconBase>
  );
};

SellingpointStocks.displayName = 'Icon.SellingpointStocks';
