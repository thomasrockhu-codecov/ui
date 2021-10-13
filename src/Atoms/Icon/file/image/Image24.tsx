import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Image24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9C7 7.34315 8.34315 6 10 6C11.6569 6 13 7.34315 13 9C13 10.6569 11.6569 12 10 12C8.34315 12 7 10.6569 7 9ZM10 8C9.44772 8 9 8.44772 9 9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9C11 8.44772 10.5523 8 10 8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4142 1H3V23H21V5.58579L16.4142 1ZM5 15.1314V3H15.5858L19 6.41421V14.9193L15 11.7194L9.94632 15.7623L7.00006 13.7982L5 15.1314ZM5 17.535V21H19V17.4806L15 14.2806L10.0537 18.2376L7 16.2018L5 17.535Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Image24;
