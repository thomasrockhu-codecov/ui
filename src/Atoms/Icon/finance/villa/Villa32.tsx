import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Villa32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 11a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="currentColor"
      />
      <path
        d="M10 16H6v4h4v-4Zm-4 6h4v4H6v-4Zm12-2v-4h-4v4h4Zm4-4h4v4h-4v-4Zm4 6h-4v4h4v-4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.66 4 16 1.67 13.34 4H5.52L1 9.65V30h13v-4a2 2 0 1 1 4 0v4h13V9.65L26.48 4h-7.82Zm2.29 2 3.43 3h3.54l-2.4-3h-4.57ZM29 11h-5.38L16 4.33 8.38 11H3v17h9v-2a4 4 0 0 1 8 0v2h9V11ZM4.08 9h3.54l3.43-3H6.48l-2.4 3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Villa32.displayName = 'Icon.Villa';

export default Villa32;
