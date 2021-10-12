import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const TickerDown8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M4 1L8 7L0 7L4 1Z" fill="currentColor" />
    </IconBase>
  );
};

export default TickerDown8;
