import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CheckCircleFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM6.41421 11.1983L9.54756 14.3316L16.8792 7L18.2934 8.41421L9.54756 17.1601L5 12.6125L6.41421 11.1983Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

CheckCircleFill24.displayName = 'Icon.CheckCircleFill';

export default CheckCircleFill24;
