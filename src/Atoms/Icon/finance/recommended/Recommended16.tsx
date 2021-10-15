import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Recommended16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8H16C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C10.0282 0 11.8823 0.756068 13.2919 2.00026L13.8888 2.52705L8.75027 12H6.4666L3.79994 7H6.0666L7.61326 9.89998L11.3465 3.01904C10.3904 2.3752 9.23984 2 8 2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Recommended16;
