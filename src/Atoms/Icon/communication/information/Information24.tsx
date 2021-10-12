import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Information24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M11 9V7h2v2h-2zM11 17v-7h2v7h-2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Information24;
