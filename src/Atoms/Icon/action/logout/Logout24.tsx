import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Logout24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M4 20a1 1 0 001 1h11v-3h2v5H5a3 3 0 01-3-3V4a3 3 0 013-3h13v5h-2V3H5a1 1 0 00-1 1v16z"
        fill="currentColor"
      />
      <path d="M18.172 11l-3-3H18l4 4-4 4h-2.828l3-3H9.343v-2h8.829z" fill="currentColor" />
    </IconBase>
  );
};

Logout24.displayName = 'Icon.Logout';

export default Logout24;
