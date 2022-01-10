import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SplitAdjusted16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M10.1709 0L12.1709 2H8.58579L3.58579 7H0V9H3.58579L8.58579 14H12.1719L10.1719 16H13.0004L16.0003 13L13.0004 10H10.1719L12.1719 12H9.41421L5.41421 8L9.41421 4H12.1709L10.1709 6H12.9994L15.9993 3L12.9994 0H10.1709Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

SplitAdjusted16.displayName = 'Icon.SplitAdjusted';

export default SplitAdjusted16;
