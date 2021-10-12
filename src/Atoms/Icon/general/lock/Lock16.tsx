import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Lock16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M5 5a3 3 0 016 0h2A5 5 0 003 5h2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6v10h16V6H0zm2 8V8h12v6H2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Lock16;
