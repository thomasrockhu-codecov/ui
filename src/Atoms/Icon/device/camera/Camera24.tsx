import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Camera24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M10 15h6v-2.167l-1 1v-2.829L17.005 9 19 10.996v2.828l-1-1V17h-8v-2zM8 11h6V9H6v4.176l-1-1v2.828L6.996 17 9 14.996v-2.829l-1 1V11z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.382 3h7.236l1 2H20a3 3 0 013 3v10a3 3 0 01-3 3H4a3 3 0 01-3-3V8a3 3 0 013-3h3.382l1-2zm1.236 2l-1 2H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1h-4.618l-1-2H9.618z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Camera24;
