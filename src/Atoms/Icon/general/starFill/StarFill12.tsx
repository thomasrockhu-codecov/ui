import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const StarFill12: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={12} height={12}>
      <path
        d="M6 0.299988L8.07659 3.75057L12 4.65924L9.36 7.70049L9.7082 11.7127L6 10.1417L2.2918 11.7127L2.64 7.70049L0 4.65924L3.92341 3.75057L6 0.299988Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default StarFill12;
