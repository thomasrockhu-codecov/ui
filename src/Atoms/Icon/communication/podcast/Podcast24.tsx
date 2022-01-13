import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Podcast24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1C9.79086 1 8 2.79086 8 5V11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11V5C16 2.79086 14.2091 1 12 1ZM10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11V5Z"
        fill="currentColor"
      />
      <path
        d="M7 11V8H5V11C5 14.5265 7.60771 17.4439 11 17.9291L11 21H9V23H15V21H13L13 17.9291C16.3923 17.4439 19 14.5265 19 11V8H17V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Podcast24.displayName = 'Icon.Podcast';

export default Podcast24;
