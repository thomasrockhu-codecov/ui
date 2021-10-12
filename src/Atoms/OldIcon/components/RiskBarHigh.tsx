import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const RiskBarHigh = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <g fill="none" fillRule="evenodd">
        <rect width="3" height="11" x="7" y="5" fill="#FF1900" />
        <rect width="3" height="7" x="2" y="9" fill="#FFCF00" />
        <rect width="3" height="16" x="12" fill="#B20300" />
      </g>
    </IconBase>
  );
};

RiskBarHigh.displayName = 'Icon.RiskBarHigh';
