import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Transfer = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32" fill={(t) => t.color.spinnerWhite}>
    <g transform="translate(2 5)">
      <mask id="transfer-mask" fill="#fff">
        <path d="M28 12v10H0V12h28zm0-12v10H0V0h28z" />
      </mask>
      <StyledPath
        cssAttribute="stroke"
        strokeColorFn={fill}
        strokeWidth="2"
        d="M3 5h20M8.707 11.364L2.343 5l6.364-6.364M25 17H5m14.293 6.364L25.657 17l-6.364-6.364"
        mask="url(#transfer-mask)"
        transform="matrix(-1 0 0 1 28 0)"
      />
    </g>
  </IconBase>
);

Transfer.displayName = 'Icon.Transfer';
