import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Warning16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M8 10H10L10 5.5H8L8 10Z" fill="currentColor" />
      <path d="M8 12.5H10V10.75H8L8 12.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0031 1.90646C10.1128 0.364514 7.88722 0.364512 6.99698 1.90646L1.31186 11.7534C0.421615 13.2953 1.53442 15.2228 3.31491 15.2228H14.6851C16.4656 15.2228 17.5784 13.2953 16.6882 11.7534L11.0031 1.90646ZM8.72903 2.90646C8.84947 2.69785 9.15058 2.69785 9.27102 2.90646L14.9561 12.7534C15.0766 12.962 14.926 13.2228 14.6851 13.2228H3.31491C3.07402 13.2228 2.92347 12.962 3.04391 12.7534L8.72903 2.90646Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Warning16.displayName = 'Icon.Warning';

export default Warning16;
