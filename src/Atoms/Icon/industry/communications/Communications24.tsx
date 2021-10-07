import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Communications24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M7 11H5V9h2v2zM9 11h2V9H9v2zM15 11h-2V9h2v2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.309 18.905A9.068 9.068 0 0110 19H1v-9a9 9 0 1117.905 1.309A6.003 6.003 0 0123 17v6h-6a6.003 6.003 0 01-5.691-4.095zM11 16.93c-.326.047-.66.071-1 .071H3v-7a7 7 0 1113.93 1A6 6 0 0011 16.93zM15 18h-2v-2h2v2zm6 0h-2v-2h2v2zm-5 0h2v-2h-2v2z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Communications24;
