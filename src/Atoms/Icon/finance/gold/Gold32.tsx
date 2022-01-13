import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Gold32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fill="currentColor">
        <path d="M17.0002 6V0H15.0002V6H17.0002Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2194 10H21.7809L23.7809 18H29.5001L32.0002 28H0.000151038L2.50015 18H8.21939L10.2194 10ZM20.2194 12L21.7194 18H10.2809L11.7809 12H20.2194ZM14.2809 20H17.7194L16.0002 26.8769L14.2809 20ZM4.0617 20H12.2194L13.7194 26H2.5617L4.0617 20ZM18.2809 26L19.7809 20H27.9386L29.4386 26H18.2809Z"
        />
        <path d="M32.2429 4L28.0003 8.24264L26.5861 6.82843L30.8287 2.58579L32.2429 4Z" />
        <path d="M0 4.00003L4.24264 8.24267L5.65685 6.82846L1.41421 2.58582L0 4.00003Z" />
      </g>
    </IconBase>
  );
};

Gold32.displayName = 'Icon.Gold';

export default Gold32;
