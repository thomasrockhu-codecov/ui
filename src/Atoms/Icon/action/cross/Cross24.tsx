import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cross24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12.01 13.425l8.486 8.485 1.414-1.414-8.486-8.486 8.465-8.506-1.414-1.414-8.465 8.506-8.485-8.485-1.414 1.414 8.485 8.485-8.506 8.465 1.414 1.414 8.506-8.464z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Cross24;
