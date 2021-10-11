import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Comment24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M18 9H6V7H18V9Z" fill="currentColor" />
      <path d="M6 13H14V11H6V13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2H23V18H8.30278L1 22.8685V2ZM3 4V19.1315L7.69722 16H21V4H3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Comment24;
