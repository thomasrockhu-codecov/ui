import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Login24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M19 3a1 1 0 011 1v16a1 1 0 01-1 1H8v-3H6v5h13a3 3 0 003-3V4a3 3 0 00-3-3H6v5h2V3h11z"
        fill="currentColor"
      />
      <path d="M7.828 8l3 3H2v2h8.828l-3 3h2.829l4-4-4-4H7.828z" fill="currentColor" />
    </IconBase>
  );
};

Login24.displayName = 'Icon.Login';

export default Login24;
