import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ViewDefault16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2h16v2H0V2ZM0 7h16v2H0V7ZM16 12H0v2h16v-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ViewDefault16;
