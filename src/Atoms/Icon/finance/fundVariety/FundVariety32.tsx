import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FundVariety32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.41 8 24 .59 16.59 8 24 15.41 31.41 8ZM24 12.59 19.41 8 24 3.41 28.59 8 24 12.59ZM15 1H1v14h14V1ZM3 13V3h10v10H3Zm5 3.59L15.41 24 8 31.41.59 24 8 16.59ZM3.41 24 8 28.59 12.59 24 8 19.41 3.41 24ZM31 17H17v14h14V17ZM19 29V19h10v10H19Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

FundVariety32.displayName = 'Icon.FundVariety';

export default FundVariety32;
