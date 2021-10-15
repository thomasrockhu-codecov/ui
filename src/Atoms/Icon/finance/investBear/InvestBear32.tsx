import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InvestBear32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6H10a4 4 0 1 0-5.64 3.65l-1.48 6.42a9 9 0 0 0 1.67 7.55L9.5 30h11l2.92-3.76L22 24.8 19.5 28h-9l-4.37-5.61a7 7 0 0 1-1.29-5.87l1.79-7.74A1 1 0 0 1 7.59 8h14.82a1 1 0 0 1 .97.78l.75 3.22h2.05l-.54-2.35A4 4 0 1 0 20 6ZM4 6a2 2 0 1 1 4 0h-.4a3 3 0 0 0-2.7 1.67A2 2 0 0 1 4 6Zm22 0a2 2 0 0 1-.9 1.67A3 3 0 0 0 22.4 6H22a2 2 0 1 1 4 0Z"
        fill="currentColor"
      />
      <path
        d="M13 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 21a2 2 0 0 0 2 2v3h2v-3a2 2 0 0 0 2-2v-2l-3 2-3-2v2Zm13 1.17-3-3v2.82l4 4 4-4v-2.82l-3 3V14h-2v8.17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default InvestBear32;
