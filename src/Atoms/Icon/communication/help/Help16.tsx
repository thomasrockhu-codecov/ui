import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Help16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8.468 9.618H6.896v-.204c0-.8 0-1.174 1.212-2.16l.115-.093c.473-.384.833-.677.833-1.155 0-.456-.324-.816-.972-.816-.672 0-1.044.42-1.2.924H5.072C5.312 4.482 6.536 3.63 8.12 3.63c1.668 0 2.808.888 2.808 2.292 0 .936-.396 1.428-1.464 2.34l-.044.037c-.48.4-.823.685-.916 1.139l-.036.18zM6.764 10.458h1.884v1.908H6.764v-1.908z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Help16.displayName = 'Icon.Help';

export default Help16;
