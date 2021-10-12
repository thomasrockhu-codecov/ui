import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Search8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6C3.46315 6 3.90178 5.89505 4.29342 5.70763L6.58579 8L8 6.58579L5.70763 4.29341C5.89505 3.90178 6 3.46315 6 3C6 1.34315 4.65685 0 3 0ZM2 3C2 2.44772 2.44772 2 3 2C3.55228 2 4 2.44772 4 3C4 3.55228 3.55228 4 3 4C2.44772 4 2 3.55228 2 3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Search8;
