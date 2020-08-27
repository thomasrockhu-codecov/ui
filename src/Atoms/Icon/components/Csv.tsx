import React from 'react';
import styled from 'styled-components';

import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${p => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const Csv = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      {/* frame */}
      <path d="M10.24 1.6H3.41v12.8h10.24V4.8h-3.41V1.6zM11.47 0l3.89 3.72V16H1.71V0h9.76z" />
      {/* box */}
      <path d="M0 6.4h11.95v6.4H0z" />
      {/* text */}
      <StyledPath
        strokeColorFn={stroke}
        d="M2.74 11.38c.83 0 1.5-.55 1.55-1.26h-.8a.77.77 0 01-.77.57c-.57 0-.94-.46-.94-1.17s.37-1.16.94-1.16c.35 0 .62.16.76.5h.8c-.08-.67-.73-1.2-1.54-1.2-1.1 0-1.77.82-1.77 1.86s.66 1.86 1.77 1.86zm3.42.01c.9 0 1.44-.46 1.44-1.13 0-.63-.43-.89-1.28-1.1-.58-.15-.83-.22-.83-.47 0-.21.18-.37.55-.37.41 0 .67.2.71.46h.77c-.07-.76-.74-1.11-1.46-1.11-.86 0-1.35.47-1.35 1.06 0 .54.28.84 1.24 1.1.53.13.87.19.87.49 0 .27-.24.41-.63.41s-.76-.15-.82-.52H4.6c.04.71.62 1.18 1.57 1.18zm3.88-.09l1.1-3.55h-.8l-.85 2.96-.84-2.96h-.82l1.1 3.55h1.11z"
      />
    </IconBase>
  );
};

Csv.displayName = 'Icon.Csv';
