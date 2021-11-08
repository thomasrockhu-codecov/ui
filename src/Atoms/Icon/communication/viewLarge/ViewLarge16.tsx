import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ViewLarge16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h16v2H0V0ZM0 7h16v2H0V7ZM16 14H0v2h16v-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ViewLarge16;
