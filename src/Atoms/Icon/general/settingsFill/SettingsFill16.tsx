import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SettingsFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.16.294A8.006 8.006 0 008.001 0C7.254 0 6.53.103 5.844.294a2 2 0 01-3.436 1.987A7.992 7.992 0 00.25 6.015a2 2 0 010 3.97 7.991 7.991 0 002.158 3.735 2 2 0 013.437 1.986c.686.192 1.41.294 2.157.294.747 0 1.47-.102 2.157-.294a2 2 0 013.436-1.986 7.992 7.992 0 002.159-3.735 2 2 0 010-3.97 7.991 7.991 0 00-2.158-3.734A2 2 0 0110.159.294zM8 11a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default SettingsFill16;
