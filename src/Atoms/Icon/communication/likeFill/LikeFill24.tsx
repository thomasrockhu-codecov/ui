import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LikeFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M9 7L7 9V17L9 19H16.6577C18.0343 19 19.2342 18.0631 19.5681 16.7276L21.0681 10.7276C21.5415 8.83417 20.1094 7 18.1577 7H13V4C13 2.34315 11.6569 1 10 1H9V7Z"
        fill="currentColor"
      />
      <path
        d="M3 9C2.44772 9 2 9.44772 2 10V19H5C5.55228 19 6 18.5523 6 18V9H3Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default LikeFill24;
