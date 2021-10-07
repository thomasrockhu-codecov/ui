import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Subtract16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M0 9h16V7H0v2z" fill="currentColor" />
    </IconBase>
  );
};

export default Subtract16;
