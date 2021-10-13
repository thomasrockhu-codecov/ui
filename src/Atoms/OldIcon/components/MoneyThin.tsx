import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const MoneyThin = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <StyledPath
          strokeColorFn={props.fill}
          cssAttribute="stroke"
          d="M16 19a3 3 0 100-6 3 3 0 000 6zM3 13a4 4 0 004-4M3 19a4 4 0 014 4m22-10a4 4 0 01-4-4m4 10a4 4 0 00-4 4M3 9h26v14H3V9z"
          strokeWidth="2"
        />
      </g>
    </IconBase>
  );
};

MoneyThin.displayName = 'OldIcon.MoneyThin';
