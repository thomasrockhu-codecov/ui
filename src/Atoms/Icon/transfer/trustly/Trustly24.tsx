import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Trustly24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 3v7.364h-7.228V21H7.91v-4.09L12.82 12l-4.91-4.91v3.274H1.5V3h21z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Trustly24;
