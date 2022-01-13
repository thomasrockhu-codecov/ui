import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Document24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M11 10H7V8h4v2zM7 18h10v-2H7v2zM17 14H7v-2h10v2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.414 1H3v22h18V5.586L16.414 1zM5 21V3h10.586L19 6.414V21H5z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Document24.displayName = 'Icon.Document';

export default Document24;
