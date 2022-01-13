import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Flag16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.863 0H1.14v16h2V9h11.723l-2.571-4.5L14.863 0zM3.14 7h8.277L9.988 4.5 11.417 2H3.14v5z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Flag16.displayName = 'Icon.Flag';

export default Flag16;
