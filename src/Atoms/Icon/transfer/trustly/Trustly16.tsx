import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Trustly16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2v4.91h-4.819V14H5.274v-2.727L8.545 8 5.273 4.727V6.91H1V2h14z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Trustly16;
