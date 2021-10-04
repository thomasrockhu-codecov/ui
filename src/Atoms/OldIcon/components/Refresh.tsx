import React from 'react';
import styled from 'styled-components';
import { getColor, IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledCircle = styled.circle<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStroke, p.strokeColorFn);
    return `stroke: ${strokeColor};`;
  }}
`;

export const Refresh = ({ stroke, ...rest }: ChildProps) => {
  return (
    <IconBase {...rest} viewBox="0 0 16 16">
      <StyledCircle strokeColorFn={stroke} fill="none" cx="8" cy="8" r="7.5" />
      <path d="M7.923 3c2.719 0 4.923 2.204 4.923 4.906l.001.213.496.133 1.19.319-2.492 1.835-.055.057-.012-.012-.616.455-1.581-3.61 1.19.32.645.172-.002-.061a3.692 3.692 0 10-3.687 3.888v1.231a4.923 4.923 0 110-9.846z" />
    </IconBase>
  );
};

Refresh.displayName = 'Icon.Refresh';
