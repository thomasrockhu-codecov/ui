import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Bank24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M11.9999 0.935944L23.3417 5.06021L22.6582 6.9398L11.9999 3.06407L1.34169 6.9398L0.658203 5.06021L11.9999 0.935944Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10H6V20H8V17H16V20H18V10H20V20H22V8H14.8293C14.4175 6.83481 13.3062 6 12 6C10.6938 6 9.58254 6.83481 9.17071 8H2V20H4V10ZM9.17071 10H8V15H16V10H14.8293C14.4175 11.1652 13.3062 12 12 12C10.6938 12 9.58254 11.1652 9.17071 10ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9Z"
        fill="currentColor"
      />
      <path d="M1 21V23H23V21H1Z" fill="currentColor" />
    </IconBase>
  );
};

export default Bank24;
