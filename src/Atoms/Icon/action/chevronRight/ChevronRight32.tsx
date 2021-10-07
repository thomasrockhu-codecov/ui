import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M9.914 31.004H7.086l15-15-15-15h2.828l15 15-15 15z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronRight32;
