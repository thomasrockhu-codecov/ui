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

export const SellingpointShareville = ({ color, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 25">
      <StyledG
        strokeColorFn={color || (() => '#28282A')}
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M6.968 12.072l2.583-2.583c1.997-1.997 5.176-2.054 7.102-.129 1.925 1.926 1.868 5.105-.129 7.101l-6.457 6.457-.774-.775c-.77-.77-1.16-1.918-1.167-3.071" />
        <path d="M12.392 12.846L9.808 15.43c-1.996 1.997-5.175 2.054-7.1.129-1.926-1.925-1.869-5.105.128-7.101L9.293 2l.774.775c.77.77 1.16 1.918 1.167 3.071" />
      </StyledG>
    </IconBase>
  );
};

SellingpointShareville.displayName = 'Icon.SellingpointShareville';
