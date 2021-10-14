import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Gold24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      {' '}
      <g fill="currentColor">
        <path d="M13 5V1H11V5H13Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7366 8H8.29508L6.29508 14H2.66667L0 22H24.0029L21.3362 14H17.7366L15.7366 8ZM13.228 16L12.0156 19.6373L10.8032 16H13.228ZM15.6284 14H8.40327L9.7366 10H14.2951L15.6284 14ZM14.0029 20L15.3362 16H19.8947L21.228 20H14.0029ZM8.69499 16H4.10818L2.77485 20H10.0283L8.69499 16Z"
        />
        <path d="M20.1701 8.00003L18.7559 6.58582L21.5843 3.75739L22.9985 5.1716L20.1701 8.00003Z" />
        <path d="M0.999849 5.1716L3.82828 8.00003L5.24249 6.58581L2.41406 3.75739L0.999849 5.1716Z" />
      </g>
    </IconBase>
  );
};

export default Gold24;
