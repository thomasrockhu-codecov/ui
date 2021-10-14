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

export const SellingpointMoney = ({ color, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 16">
      <StyledG
        strokeColorFn={color || (() => '#28282A')}
        transform="translate(1 1.5)"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M0 0h22v13H0zM18 0a4 4 0 004 4M18 13a4 4 0 014-4M4 0a4 4 0 01-4 4M4 13a4 4 0 00-4-4" />
        <circle cx="11" cy="6.5" r="2.5" />
      </StyledG>
    </IconBase>
  );
};

SellingpointMoney.displayName = 'OldIcon.SellingpointMoney';
