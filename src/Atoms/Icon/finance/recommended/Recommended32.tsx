import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Recommended32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M3 16C3 8.8203 8.8203 3 16 3C19.0133 3 21.7855 4.02416 23.9901 5.74452L15.1527 22.0365L11.3999 15H9.13327L13.9333 24H16.3629L26.519 5.27705L25.9221 4.75026C23.2785 2.41693 19.8035 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16H29C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Recommended32;
