import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Search16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.51 2.51a5.5 5.5 0 007.008 8.422l4.307 4.307 1.414-1.414-4.307-4.307A5.502 5.502 0 002.511 2.51zm1.415 6.365a3.5 3.5 0 114.95-4.95 3.5 3.5 0 01-4.95 4.95z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Search16;
