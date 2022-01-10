import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Trustly32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4h30v11h-9v13H10v-6.414L15.586 16 12 12.414V15H1V4zm2 2v7h7V7.586L18.414 16 12 22.414V26h8V13h9V6H3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Trustly32.displayName = 'Icon.Trustly';

export default Trustly32;
