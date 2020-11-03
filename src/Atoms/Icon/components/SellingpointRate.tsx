import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const SellingpointRate = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <g
        transform="translate(1.4 1.5)"
        stroke="#0046FF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M1.417 17L15.583 0" />
        <circle cx="2.833" cy="2.833" r="2.833" />
        <circle cx="14.167" cy="14.167" r="2.833" />
      </g>
    </IconBase>
  );
};

SellingpointRate.displayName = 'Icon.SellingpointRate';
