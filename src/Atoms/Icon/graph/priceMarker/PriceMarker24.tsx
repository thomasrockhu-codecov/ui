import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceMarker24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M19.5 13H17V11H18.5L20.75 8L18.5 5L11 5L11 9H9V3H19.5L23.25 8L19.5 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11H4.5L0.75 16L4.5 21H15V11ZM3.25 16L5.5 13H13V19H5.5L3.25 16Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

PriceMarker24.displayName = 'Icon.PriceMarker';

export default PriceMarker24;
