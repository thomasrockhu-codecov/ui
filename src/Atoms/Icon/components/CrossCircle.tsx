import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPolygon = styled.polygon<StyledChildProps>`
  ${p => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStroke, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const CrossCircle = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props}>
      <path d="M12,23.8695652 C18.627417,23.8695652 24,18.5553799 24,12 C24,5.44462014 18.627417,0.130434783 12,0.130434783 C5.372583,0.130434783 0,5.44462014 0,12 C0,18.5553799 5.372583,23.8695652 12,23.8695652 Z" />
      <StyledPolygon
        strokeColorFn={stroke}
        points="11.492 6.847 11.492 17.137 12.492 17.137 12.492 6.847"
        transform="rotate(-45 11.992 11.992)"
      />
      <StyledPolygon
        strokeColorFn={stroke}
        points="11.492 6.847 11.492 17.137 12.492 17.137 12.492 6.847"
        transform="rotate(45 11.992 11.992)"
      />
    </IconBase>
  );
};

CrossCircle.displayName = 'Icon.CrossCircle';
