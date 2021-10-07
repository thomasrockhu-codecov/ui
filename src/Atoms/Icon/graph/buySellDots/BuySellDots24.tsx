import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const BuySellDots16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12 8.828l-4-4v10.167H6V4.828l-4 4V6l5-5 5 5v2.828zM12 15.167l4 4V9h2v10.167l4-4v2.828l-5 5-5-5v-2.828z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default BuySellDots16;
