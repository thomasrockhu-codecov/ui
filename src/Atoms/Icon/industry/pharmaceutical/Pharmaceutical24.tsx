import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Pharmaceutical24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M11 14v-2h2v2h2v2h-2v2h-2v-2H9v-2h2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a2 2 0 00-2 2v2a2 2 0 002 2v1.586l-2.121 2.121A3 3 0 004 12.828V20a3 3 0 003 3h10a3 3 0 003-3v-7.172a3 3 0 00-.879-2.12L17 8.585V7a2 2 0 002-2V3a2 2 0 00-2-2H7zm8 6H9v2.414l-2.707 2.707a1 1 0 00-.293.707V20a1 1 0 001 1h10a1 1 0 001-1v-7.172a1 1 0 00-.293-.707L15 9.414V7zm-4-2h2V3h-2v2zM9 5V3H7v2h2zm8 0h-2V3h2v2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Pharmaceutical24;
