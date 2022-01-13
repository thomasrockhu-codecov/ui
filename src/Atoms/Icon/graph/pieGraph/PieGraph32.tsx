import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PieGraph32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M4 16A12 12 0 0 1 16 4V2a14 14 0 1 0 14 14h-2a12 12 0 0 1-24 0ZM18.47 4.26a12 12 0 0 1 9.29 9.34l1.96-.4A14.02 14.02 0 0 0 18.89 2.3l-.42 1.96Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PieGraph32.displayName = 'Icon.PieGraph';

export default PieGraph32;
