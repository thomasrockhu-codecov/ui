import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SortDescending16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M4 7.82845L4 5.00002L7.9975 1.00252L12 5.00503L12 7.83345L8.9975 4.83095L8.9975 14.9976L6.9975 14.9976L6.9975 4.83095L4 7.82845Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SortDescending16.displayName = 'Icon.SortDescending';

export default SortDescending16;
