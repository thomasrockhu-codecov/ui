import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const AddCircleFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7 12V9H4V7H7V4H9V7H12V9H9V12H7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

AddCircleFill16.displayName = 'Icon.AddCircleFill';

export default AddCircleFill16;
