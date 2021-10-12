import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M17.95 2l-9.5 9.973L18 22h-2.45L6 11.973 15.5 2h2.45z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronLeft24;
