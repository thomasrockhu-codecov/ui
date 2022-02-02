import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Percent16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="currentColor"
      />
      <path d="M3.6 16 14.9 0h-2.5L1.1 16h2.5Z" fill="currentColor" />
    </IconBase>
  );
};

Percent16.displayName = 'Icon.Percent';

export default Percent16;
