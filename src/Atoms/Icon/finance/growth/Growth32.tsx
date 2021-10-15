import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Growth32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M23 6v2.83l3-3V30h2V5.83l3 3V6l-4-4-4 4Zm-3 24V10h-2v20h2Zm-8-14v14h-2V16h2Zm-8 6v8H2v-8h2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Growth32;
