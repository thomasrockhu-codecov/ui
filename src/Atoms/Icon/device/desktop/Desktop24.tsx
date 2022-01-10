import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Desktop24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 16V4h18v12H3zM5 6h14v8H5V6z"
        fill="currentColor"
      />
      <path d="M1 20h22v-2H1v2z" fill="currentColor" />
    </IconBase>
  );
};

Desktop24.displayName = 'Icon.Desktop';

export default Desktop24;
