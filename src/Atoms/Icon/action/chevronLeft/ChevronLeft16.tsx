import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M13.42 0l-8 8 8 8h-2.828l-8-8 8-8h2.828z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronLeft16;
