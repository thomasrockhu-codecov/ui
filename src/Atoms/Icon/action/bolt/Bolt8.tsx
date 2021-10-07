import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Bolt8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M5.167 0L.5 4.5h2.917L2.833 8 7.5 3.5H4.583L5.167 0z" fill="currentColor" />
    </IconBase>
  );
};

export default Bolt8;
