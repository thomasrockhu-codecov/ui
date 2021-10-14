import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Volume24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M18 2h-2v20h2V2ZM6 7h2v15H6V7Zm7 5h-2v10h2V12ZM3 15H1v7h2v-7Zm20 0h-2v7h2v-7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Volume24;
