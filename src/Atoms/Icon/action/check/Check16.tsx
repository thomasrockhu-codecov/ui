import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Check16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.85 3.657l-9.9 9.9L.293 7.898l1.414-1.414 4.243 4.243 8.485-8.485 1.414 1.414z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Check16;
