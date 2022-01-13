import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Office24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M13 .52v4.66l10 2V23h-2V8.82l-8-1.6V23h-2V3.48l-8 3.2V23H1V5.32l12-4.8Z"
        fill="currentColor"
      />
      <path
        d="M5 10h4V8H5v2Zm4 4H5v-2h4v2Zm-4 4h4v-2H5v2Zm4 4H5v-2h4v2Zm8-4a3 3 0 0 0-3 3v2h2v-2a1 1 0 1 1 2 0v2h2v-2a3 3 0 0 0-3-3Zm-3-8h2v2h-2v-2Zm2 4h-2v2h2v-2Zm2-4h2v2h-2v-2Zm2 4h-2v2h2v-2Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Office24.displayName = 'Icon.Office';

export default Office24;
