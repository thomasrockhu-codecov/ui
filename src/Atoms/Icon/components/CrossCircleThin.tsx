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

export const CrossCircleThin = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 92 92">
      <path d="M46 92.0000003c25.4050985 0 46-20.5949015 46-46S71.4050985 3.3e-7 46 3.3e-7 0 20.5949018 0 46.0000003c0 25.4050985 20.5949015 46 46 46z" />
      <path d="M58.5601262 30.666667l2.710576 2.710576-12.5920355 12.591424 12.5920355 12.5914595-2.710576 2.710576L45.9686667 48.678667l-12.591424 12.5920355-2.710576-2.710576 12.591-12.5914595-12.591-12.591424 2.710576-2.710576 12.591424 12.591 12.5914595-12.591z" />
      <StyledPolygon
        strokeColorFn={stroke}
        points="8.681 9.967 5.073 6.333 6.396 5 10.004 8.634 13.604 5.007 14.916 6.329 11.316 9.956 15 13.667 13.677 15 9.993 11.289 6.312 14.997 5 13.675"
      />
    </IconBase>
  );
};

CrossCircleThin.displayName = 'Icon.CrossCircleThin';
