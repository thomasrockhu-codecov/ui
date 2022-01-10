import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const TabDefault24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M3 1v20h17V1h2v22H1V1h2z" fill="currentColor" />
      <path
        d="M4 17h3v3H4v-3zM8 17h3v3H8v-3zM15 17h-3v3h3v-3zM16 17h3v3h-3v-3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

TabDefault24.displayName = 'Icon.TabDefault';

export default TabDefault24;
