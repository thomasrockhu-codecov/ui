import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Pension16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.64 7A3.5 3.5 0 0 1 7 6.19a2.74 2.74 0 0 1 2 0 3.5 3.5 0 0 1 6.36.81H16v2h-.64a3.5 3.5 0 0 1-6.85-.8.75.75 0 0 0-1.02 0A3.5 3.5 0 0 1 .64 9H0V7h.64ZM4 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM10.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Pension16.displayName = 'Icon.Pension';

export default Pension16;
