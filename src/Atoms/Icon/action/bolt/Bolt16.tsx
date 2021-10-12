import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Bolt16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M9.833 2L2.5 8.75h4.583L6.167 14 13.5 7.25H8.917L9.833 2z" fill="currentColor" />
    </IconBase>
  );
};

export default Bolt16;
