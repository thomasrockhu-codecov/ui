import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Stock16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M12.5858 5H9L11 3H15.9999L16 8L14 10L13.9999 6.41434L9.00008 11.4142L6.00008 8.4142L1.70718 12.7071L0.292969 11.2929L6.00008 5.58577L9.00008 8.58577L12.5858 5Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Stock16.displayName = 'Icon.Stock';

export default Stock16;
