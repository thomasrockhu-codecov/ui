import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Utilities16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M4 6a4 4 0 115 3.874V13h2v-1.803a6 6 0 10-6 0V13h2V9.874A4.002 4.002 0 014 6zM11 16v-2H5v2h6z"
        fill="currentColor"
      />
      <path d="M8 5a1 1 0 011 1h2a3 3 0 00-3-3v2z" fill="currentColor" />
    </IconBase>
  );
};

Utilities16.displayName = 'Icon.Utilities';

export default Utilities16;
