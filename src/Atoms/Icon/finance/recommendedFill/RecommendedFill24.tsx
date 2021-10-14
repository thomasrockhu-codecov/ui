import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RecommendedFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8124 18H10.423L6.65381 11H8.92532L11.6287 16.0205L18.2513 4.19435C16.5391 2.82132 14.3655 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.58983 21.1473 7.3788 19.7272 5.65211L12.8124 18Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default RecommendedFill24;
