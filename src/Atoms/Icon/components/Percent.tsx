import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Percent = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32" fill={(t) => t.color.spinnerWhite}>
    <g transform="translate(3 3)">
      <mask id="mask-2" fill="#fff">
        <path d="M0 0H26V26H0z" />
      </mask>
      <StyledPath
        cssAttribute="stroke"
        strokeColorFn={fill}
        strokeWidth="2"
        d="M1 27.003L25-1M7 9a4 4 0 100-8 4 4 0 000 8zm12 16a4 4 0 100-8 4 4 0 000 8z"
        mask="url(#mask-2)"
      />
    </g>
  </IconBase>
);

Percent.displayName = 'Icon.Percent';
