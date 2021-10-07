import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Transportation32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.474 4H1V2h17.474a5 5 0 014.515 2.85l6.871 14.43C31.124 21.935 29.19 25 26.25 25H1v-2h25.249a2 2 0 001.805-2.86L27.512 19H15a3 3 0 01-3-3v-6a3 3 0 013-3h6.797l-.614-1.29A3 3 0 0018.474 4zm4.276 5H15a1 1 0 00-1 1v6a1 1 0 001 1h11.56l-3.81-8z"
        fill="currentColor"
      />
      <path d="M31 27H1v2h2v2h2v-2h6v2h2v-2h6v2h2v-2h6v2h2v-2h2v-2z" fill="currentColor" />
    </IconBase>
  );
};

export default Transportation32;
