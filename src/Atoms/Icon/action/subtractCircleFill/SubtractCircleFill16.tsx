import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SubtractCircleFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM4 9V7h8v2H4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default SubtractCircleFill16;
