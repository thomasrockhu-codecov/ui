import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const SellingpointStocks = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 15">
      <g stroke="#0046FF" strokeWidth="2" fill="none" fillRule="evenodd">
        <path d="M1 14.333l6.564-8 6.564 4L22.333 1" />
        <path d="M17 1h5.333v5.333" />
      </g>
    </IconBase>
  );
};

SellingpointStocks.displayName = 'Icon.SellingpointStocks';
