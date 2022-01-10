import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InternalTransfer24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z"
        fill="currentColor"
      />
      <path
        d="M22.5 12.082l1.499-1.5v2.829l-2.502 2.502L19 13.414v-2.828l1.5 1.5V7H1.5V5h21v7.082zM0 10.59v2.828l1.5-1.5V19h21v-2h-19v-5.086l1.5 1.5v-2.828L2.502 8.087 0 10.59z"
        fill="currentColor"
      />
    </IconBase>
  );
};

InternalTransfer24.displayName = 'Icon.InternalTransfer';

export default InternalTransfer24;
