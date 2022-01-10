import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const RealEstate32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 .683L31 13.54V31h-2V14.46L16 3.317 3 14.46V29h8V19h10v12h-2V21h-6v10H1V13.54L16 .683z"
        fill="currentColor"
      />
    </IconBase>
  );
};

RealEstate32.displayName = 'Icon.RealEstate';

export default RealEstate32;
