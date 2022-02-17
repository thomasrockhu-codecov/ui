import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Tag24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M7.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3H5l-5 9 5 9h19V3ZM2.3 12 6 5H22v14H6.1l-3.8-7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Tag24.displayName = 'Icon.Tag';

export default Tag24;
