import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Save24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 1H7C5.34315 1 4 2.29491 4 3.89227V23L12 18.1029L20 23V3.89227C20 2.29491 18.6569 1 17 1ZM17 2.92818L17.1166 2.93467C17.614 2.99036 18 3.39785 18 3.89227V19.4912L12 15.819L6 19.4912V3.89227C6 3.35982 6.44772 2.92818 7 2.92818H17Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Save24.displayName = 'Icon.Save';

export default Save24;
