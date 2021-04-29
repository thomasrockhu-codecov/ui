import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const ThreeDotsO = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32" fill={(t) => t.color.spinnerWhite}>
    <StyledPath
      cssAttribute="stroke"
      strokeColorFn={fill}
      strokeWidth="2"
      d="M6 13a3 3 0 110 6 3 3 0 010-6zm20 0a3 3 0 110 6 3 3 0 010-6zm-10 0a3 3 0 110 6 3 3 0 010-6z"
    />
  </IconBase>
);

ThreeDotsO.displayName = 'Icon.ThreeDotsO';
