import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps, ColorFn } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const CalendarO = ({ fill, ...props }: BaseProps & { fill: ColorFn | string }) => (
  <IconBase {...props} viewBox="0 0 32 32" fill={(t) => t.color.spinnerWhite}>
    <StyledPath
      cssAttribute="stroke"
      strokeColorFn={fill}
      strokeWidth="2"
      d="M5 7h22v5H5V7zm0 5h22v16H5V12zm18-8v4M9 4v4"
    />
  </IconBase>
);

CalendarO.displayName = 'Icon.CalendarO';
