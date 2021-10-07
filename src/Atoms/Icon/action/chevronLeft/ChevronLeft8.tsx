import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={9}>
      <path d="M7.414.014l-4 4 4 4H4.586l-4-4 4-4h2.828z" fill="currentColor" />
    </IconBase>
  );
};

export default ChevronLeft8;
