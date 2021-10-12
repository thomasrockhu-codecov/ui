import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const TickerUp8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M4 7L0 1L8 1L4 7Z" fill="currentColor" />
    </IconBase>
  );
};

export default TickerUp8;
