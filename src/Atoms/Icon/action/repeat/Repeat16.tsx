import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Repeat16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M14 1v3.392A7.003 7.003 0 001.29 6h2.126a5.001 5.001 0 019.168 0H9l2 2h5V3l-2-2zM14.71 10h-2.126a5.001 5.001 0 01-9.168 0H7L5 8H0v5l2 2v-3.392A7.003 7.003 0 0014.71 10z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Repeat16;
