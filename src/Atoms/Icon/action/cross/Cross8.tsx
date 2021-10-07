import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cross8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path
        d="M2.586 4L0 6.586 1.414 8 4 5.414 6.586 8 8 6.586 5.414 4 8 1.414 6.586 0 4 2.586 1.414 0 0 1.414 2.586 4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Cross8;
