import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Menu32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M1 5h30v2H1V5zM1 15h30v2H1v-2zM31 25H1v2h30v-2z" fill="currentColor" />
    </IconBase>
  );
};

Menu32.displayName = 'Icon.Menu';

export default Menu32;
