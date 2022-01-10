import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Menu24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M1 4h22v2H1V4zM1 11h22v2H1v-2zM23 18H1v2h22v-2z" fill="currentColor" />
    </IconBase>
  );
};

Menu24.displayName = 'Icon.Menu';

export default Menu24;
