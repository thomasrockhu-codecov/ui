import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PieGraph24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M3 12a9 9 0 0 1 9-9V1a11 11 0 1 0 11 11h-2a9 9 0 1 1-18 0Z" fill="currentColor" />
      <path
        d="M14.25 3.28a9.02 9.02 0 0 1 6.47 6.47l1.93-.5c-1-3.87-4.03-6.9-7.9-7.9l-.5 1.93Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PieGraph24.displayName = 'Icon.PieGraph';

export default PieGraph24;
