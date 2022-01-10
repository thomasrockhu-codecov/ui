import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Fund16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M15 0H1V11L3 9V2H13V16H15V0Z" fill="currentColor" />
      <path
        d="M5 7H7.58636L1.00017 13.5858L1.00027 16L3.00026 16L3.00019 14.4142L9 8.41478V11L11 9V5H7L5 7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Fund16.displayName = 'Icon.Fund';

export default Fund16;
