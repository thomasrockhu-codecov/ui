import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FeeNone16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M0.29281 1.70709L14.2928 15.7071L15.707 14.2929L1.70702 0.292877L0.29281 1.70709Z"
        fill="currentColor"
      />
      <path
        d="M0 2.99999H0.17133L3.20527 6.03393C2.87753 6.38909 2.46509 6.6649 2 6.82929V9.1707C2.85241 9.47198 3.52801 10.1476 3.82929 11H8.17134L10.1713 13H0V2.99999Z"
        fill="currentColor"
      />
      <path
        d="M5.82819 2.99999L7.82819 4.99999H12.1707C12.472 5.85241 13.1476 6.528 14 6.82929V9.1707C13.5348 9.33512 13.1223 9.61102 12.7945 9.9663L15.8282 13H16V2.99999H5.82819Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

FeeNone16.displayName = 'Icon.FeeNone';

export default FeeNone16;
