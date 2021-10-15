import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Percent32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="m3.52 30 22.4-28h2.56L6.08 30H3.52Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.01 30H23a5 5 0 1 1 .02 0ZM20 25a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM9 2a5 5 0 1 0 0 10A5 5 0 0 0 9 2ZM6 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Percent32;
