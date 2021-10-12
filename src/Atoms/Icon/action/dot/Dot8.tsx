import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Dot8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <circle cx={4} cy={4} r={4} fill="currentColor" />
    </IconBase>
  );
};

export default Dot8;
