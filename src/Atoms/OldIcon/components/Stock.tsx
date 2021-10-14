import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Stock = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <StyledPath
        d="M20.2382 9L22.2382 7H31.6666V16.4277L29.6666 18.4277V10.6302L20.1502 21.3362L10.8666 14.7051L2.12265 25.9473L0.543945 24.7194L10.4667 11.9616L19.8497 18.6638L28.4398 9H20.2382Z"
        strokeColorFn={props.fill}
        cssAttribute="fill"
      />
    </IconBase>
  );
};

Stock.displayName = 'OldIcon.Stock';
