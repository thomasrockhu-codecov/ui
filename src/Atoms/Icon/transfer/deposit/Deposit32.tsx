import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Deposit32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 16a3 3 0 116 0 3 3 0 01-6 0zm2 0a1 1 0 112 0 1 1 0 01-2 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 28h5a1 1 0 001-1v-3H3V8h24V5a1 1 0 00-1-1h-5V2h5a3 3 0 013 3v22a3 3 0 01-3 3h-5v-2zm6-18H5v12h22V10z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Deposit32.displayName = 'Icon.Deposit';

export default Deposit32;
