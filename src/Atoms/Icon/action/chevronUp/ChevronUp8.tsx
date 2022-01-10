import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronUp8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M8 7.418l-4-4-4 4V4.59l4-4 4 4v2.828z" fill="currentColor" />
    </IconBase>
  );
};

ChevronUp8.displayName = 'Icon.ChevronUp';

export default ChevronUp8;
