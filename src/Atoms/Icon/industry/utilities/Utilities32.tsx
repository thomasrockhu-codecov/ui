import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Utilities32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M7 11a9 9 0 1113.5 7.797l-.5.288V24h2v-3.78c3.008-1.96 5-5.357 5-9.22 0-6.075-4.925-11-11-11S5 4.925 5 11c0 3.863 1.992 7.26 5 9.22V24h2v-4.915l-.5-.288A8.996 8.996 0 017 11z"
        fill="currentColor"
      />
      <path
        d="M17 5a5 5 0 015 5h-2a3 3 0 00-3-3V5zM10 26v2h12v-2H10zM10 30v2h12v-2H10z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Utilities32;
