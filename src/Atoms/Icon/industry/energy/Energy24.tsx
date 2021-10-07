import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Energy24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.853 1h8.151l-3 7.143h5.008L8.297 23.603l-1.762-.866L9.19 13H4.453l5.4-12zm1.293 2l-3.6 8h4.263l-1.984 7.276 6.162-8.133h-3.992l3-7.143h-3.849z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Energy24;
