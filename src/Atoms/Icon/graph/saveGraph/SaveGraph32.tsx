import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SaveGraph32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M29 26V2h-2v24h2Zm-6 0h-2V6h2v20Zm-6 0V12h-2v14h2Zm-6-10v10H9V16h2ZM5 26v-6H3v6h2Zm25 4H2v-2h28v2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default SaveGraph32;
