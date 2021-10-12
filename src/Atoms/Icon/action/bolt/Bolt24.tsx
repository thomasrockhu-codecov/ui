import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Bolt24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={26}>
      <path
        d="M15 4L5 15h5l-1 7 10-11h-5l1-7z"
        stroke="currentColor"
        strokeWidth={2}
        fill="transparent"
      />
    </IconBase>
  );
};

export default Bolt24;
