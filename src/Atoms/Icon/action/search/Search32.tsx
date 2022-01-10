import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Search32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.68 21.093a10.956 10.956 0 01-7.04 2.547c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11c0 2.678-.957 5.132-2.547 7.039l9.254 9.254-1.414 1.414-9.254-9.254zm1.96-8.453a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Search32.displayName = 'Icon.Search';

export default Search32;
