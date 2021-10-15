import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Guidance24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0002 2H19.0002V10H13.0002V11L18.4144 11L22.4144 15L18.4144 19H13.0002V22H17.0002V24H7.00015V22H11.0002V19H4.00015L4.00015 11L11.0002 11V10H4.58594L0.585938 6L4.58594 2H11.0002V0H13.0002V2ZM5.41436 8H17.0002V4H5.41436L3.41436 6L5.41436 8ZM6.00015 13L6.00015 17L17.5859 17L19.5859 15L17.5859 13L6.00015 13Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Guidance24;
