import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const More16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M10 8a2 2 0 11-4 0 2 2 0 014 0zM4 8a2 2 0 11-4 0 2 2 0 014 0zM16 8a2 2 0 11-4 0 2 2 0 014 0z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default More16;
