import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Language24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.57 13.55h-1.65l-.5-1.55h-2.91l-.5 1.55H8.44l2.42-7.1h2.27l2.44 7.1zm-3.6-6.01l-1.03 3.16h2.05l-1.02-3.16z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 2H1v21.08L7.35 18H23V2zM3 18.92V4h18v12H6.65L3 18.92z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Language24.displayName = 'Icon.Language';

export default Language24;
