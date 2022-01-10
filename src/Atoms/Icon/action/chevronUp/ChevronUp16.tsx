import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronUp16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M16 13.42l-8-8-8 8v-2.828l8-8 8 8v2.828z" fill="currentColor" />
    </IconBase>
  );
};

ChevronUp16.displayName = 'Icon.ChevronUp';

export default ChevronUp16;
