import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Filter16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4H0V2h16v2zM14 9H2V7h12v2zM12 14H4v-2h8v2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Filter16;
