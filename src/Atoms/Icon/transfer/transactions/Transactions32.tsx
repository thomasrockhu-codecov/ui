import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Transactions32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M21.173 15H24l5-5-5-5h-2.828l4 4H7v2h18.173l-4 4zM9.828 17H7l-5 5 5 5h2.828l-4-4h18.173v-2H5.828l4-4z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Transactions32;
