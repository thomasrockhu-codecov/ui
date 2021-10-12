import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const MoneyMove = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <StyledPath
          strokeColorFn={props.fill}
          cssAttribute="stroke"
          d="M28 19V9H4m0 4v10h24m-2.828-5.667L28 20.162l2.828-2.829M1.172 14.667L4 11.838l2.828 2.829M16 19a3 3 0 100-6 3 3 0 000 6z"
          strokeWidth="2"
        />
      </g>
    </IconBase>
  );
};

MoneyMove.displayName = 'Icon.MoneyMove';
