import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const WhatsNew24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 1.38196V20.618L10 17.618V23.618L4 20.618V16H2V5.99999H6.76393L16 1.38196ZM6.76393 16L8 16.618V20.382L6 19.382V16H6.76393ZM14 4.61803L7.23607 7.99999H4V14H7.23607L14 17.382V4.61803Z"
        />
        <path d="M19 12H22V10H19V12Z" />
        <path d="M21.5607 4.93938L19.4394 7.0607L18.0251 5.64648L20.1465 3.52516L21.5607 4.93938Z" />
        <path d="M18.0001 16L20.1214 18.1213L21.5356 16.7071L19.4143 14.5858L18.0001 16Z" />
      </g>
    </IconBase>
  );
};

export default WhatsNew24;
