import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FundVariety24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <g fillRule="evenodd" clipRule="evenodd" fill="currentColor">
        <path d="M1.00015 0.999998H11.0002V11H1.00015V0.999998ZM3.00015 3V9H9.00015V3H3.00015Z" />
        <path d="M13.0002 13H23.0002V23H13.0002V13ZM15.0002 15V21H21.0002V15H15.0002Z" />
        <path d="M6.00015 12.5858L11.4144 18L6.00015 23.4142L0.585938 18L6.00015 12.5858ZM3.41436 18L6.00015 20.5858L8.58594 18L6.00015 15.4142L3.41436 18Z" />
        <path d="M18.0002 0.585785L23.4144 6L18.0002 11.4142L12.5859 6L18.0002 0.585785ZM15.4144 6L18.0002 8.58578L20.5859 6L18.0002 3.41421L15.4144 6Z" />
      </g>
    </IconBase>
  );
};

FundVariety24.displayName = 'Icon.FundVariety';

export default FundVariety24;
