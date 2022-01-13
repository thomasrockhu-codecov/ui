import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RealEstate24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .586l11 11V23h-2V12.414l-9-9-9 9V21h5.143v-7.143h7.714V23h-2v-7.143h-3.714V23H1V11.586l11-11z"
        fill="currentColor"
      />
    </IconBase>
  );
};

RealEstate24.displayName = 'Icon.RealEstate';

export default RealEstate24;
