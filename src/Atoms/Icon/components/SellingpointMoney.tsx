import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const SellingpointMoney = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 16">
      <g
        transform="translate(1 1.5)"
        stroke="#0046FF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <path d="M0 0h22v13H0zM18 0a4 4 0 004 4M18 13a4 4 0 014-4M4 0a4 4 0 01-4 4M4 13a4 4 0 00-4-4" />
        <circle cx="11" cy="6.5" r="2.5" />
      </g>
    </IconBase>
  );
};

SellingpointMoney.displayName = 'Icon.SellingpointMoney';
