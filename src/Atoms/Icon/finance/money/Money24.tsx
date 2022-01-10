import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Money24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 5H0V19H24V5ZM2 17V15.708C2.57672 15.96 3.04 16.4233 3.29198 17H2ZM5.38849 17C5.00674 15.3176 3.68238 13.9933 2 13.6115V10.3885C3.68238 10.0067 5.00674 8.68238 5.38849 7H18.6115C18.9933 8.68238 20.3176 10.0067 22 10.3885V13.6115C20.3176 13.9933 18.9933 15.3176 18.6115 17H5.38849ZM3.29198 7C3.04 7.57672 2.57672 8.04 2 8.29198V7H3.29198ZM20.708 17H22V15.708C21.4233 15.96 20.96 16.4233 20.708 17ZM22 8.29198V7H20.708C20.96 7.57672 21.4233 8.04 22 8.29198Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Money24.displayName = 'Icon.Money';

export default Money24;
