import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Flag24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 1l-4.375 6L21 13H5v10H3V1h18zM5 3h12.066L14.15 7l2.916 4H5V3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Flag24;
