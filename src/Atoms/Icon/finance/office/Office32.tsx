import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Office32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M17 1.48V7.2l14 3V31h-2V11.8L17 9.25V31h-2V4.52L3 9.66V31H1V8.34l16-6.86Z"
        fill="currentColor"
      />
      <path
        d="M5 14h8v-2H5v2Zm8 5H5v-2h8v2Zm-8 5h8v-2H5v2Zm8 5H5v-2h8v2Zm10-5a4 4 0 0 0-4 4v3h2v-3a2 2 0 1 1 4 0v3h2v-3a4 4 0 0 0-4-4Zm-4-10h3v3h-3v-3Zm3 5h-3v3h3v-3Zm2-5h3v3h-3v-3Zm3 5h-3v3h3v-3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Office32;
