import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ValueStock32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.556 3H6.447L.76 12.1 16 29.519l15.242-17.42L25.556 3zm-21.75 8l3.098-4.958L9.383 11H3.806zm9.577-6L11 9.764 8.619 5h4.764zm-.764 6l3-6h.764l3 6h-6.764zm10 0h5.578l-3.099-4.958L22.618 11zM21 9.764L23.383 5h-4.764L21 9.764zm-7.866 13.441L9.308 13H4.205l8.93 10.205zM11.444 13L16 25.152 20.558 13h-9.114zm16.353 0l-8.93 10.207L22.694 13h5.104z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ValueStock32;
