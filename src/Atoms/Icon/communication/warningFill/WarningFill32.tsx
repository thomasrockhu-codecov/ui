import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const WarningFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.239 1.16105C13.9942 -0.241349 16.0058 -0.241346 16.7609 1.16105L29.0867 24.0518C29.8042 25.3843 28.8391 27 27.3257 27H2.67418C1.16083 27 0.195755 25.3843 0.913234 24.0518L13.239 1.16105ZM16 19V8L14 8.00004V19.0001L16 19ZM16 23.0001V21L14 21.0001V23.0001L16 23.0001Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default WarningFill32;
