import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Volume16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M15 0h-2v16h2V0ZM5 4h2v12H5V4Zm6 4H9v8h2V8Zm-8 2H1v6h2v-6Z" fill="currentColor" />
    </IconBase>
  );
};

export default Volume16;
