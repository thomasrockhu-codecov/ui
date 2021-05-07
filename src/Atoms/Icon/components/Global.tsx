import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';
import StyledPath from '../StyledPath';

export const Global = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <g fill="none" fillRule="evenodd">
        <StyledPath
          strokeColorFn={props.fill}
          cssAttribute="stroke"
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm0 0c2.21 0 4-5.373 4-12S18.21 4 16 4s-4 5.373-4 12 1.79 12 4 12zM4 16c0 2.21 5.373 4 12 4s12-1.79 12-4-5.373-4-12-4-12 1.79-12 4z"
          strokeWidth="2"
        />
      </g>
    </IconBase>
  );
};

Global.displayName = 'Icon.Global';
