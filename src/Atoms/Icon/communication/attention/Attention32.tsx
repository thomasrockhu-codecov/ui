import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Attention32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 31C7.71573 31 0.999999 24.2843 1 16C1 7.71573 7.71573 0.999999 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31ZM16 29C23.1797 29 29 23.1797 29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29ZM15 20L15 8H17V20H15ZM15 24L15 22H17L17 24H15Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Attention32.displayName = 'Icon.Attention';

export default Attention32;
