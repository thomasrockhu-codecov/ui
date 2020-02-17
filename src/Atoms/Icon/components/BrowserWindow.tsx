import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const BrowserWindow = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path
        d="M24.375 1.625v22.75H1.625V1.625zM3.25 9.75v13h19.5v-13zM6.5 4.875V6.5H4.875V4.875zm3.25 0V6.5H8.125V4.875zm3.25 0V6.5h-1.625V4.875zm-9.75 3.25h19.5V3.25H3.25zm0 0"
        transform="translate(-1,-1)"
      />
    </IconBase>
  );
};

BrowserWindow.displayName = 'Icon.BrowserWindow';
