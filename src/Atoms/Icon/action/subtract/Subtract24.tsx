import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Subtract24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path fill="currentColor" d="M1 11h22v2H1z" />
    </IconBase>
  );
};

export default Subtract24;
