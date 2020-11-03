import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const SellingpointFunds = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 22 22">
      <g
        transform="translate(1.5 1.5)"
        stroke="#0046FF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M9.333 0a9.333 9.333 0 109.334 9.333M18.517 7.658A9.344 9.344 0 0011.233.194" />
        <circle cx="9.333" cy="9.333" r="2" />
      </g>
    </IconBase>
  );
};

SellingpointFunds.displayName = 'Icon.SellingpointFunds';
