import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Menu16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M0 1h16v2H0V1zM0 7h16v2H0V7zM16 13H0v2h16v-2z" fill="currentColor" />
    </IconBase>
  );
};

Menu16.displayName = 'Icon.Menu';

export default Menu16;
