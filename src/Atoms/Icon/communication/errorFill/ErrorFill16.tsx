import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ErrorFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.686 0h6.628L16 4.686v6.628L11.314 16H4.686L0 11.314V4.686L4.686 0zM9 9V3H7v6h2zm0 4v-2H7v2h2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ErrorFill16.displayName = 'Icon.ErrorFill';

export default ErrorFill16;
