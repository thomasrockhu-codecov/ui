import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Image16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M8 5.5C8 6.32843 7.32843 7 6.5 7C5.67157 7 5 6.32843 5 5.5C5 4.67157 5.67157 4 6.5 4C7.32843 4 8 4.67157 8 5.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4142 0H1V16H15V3.58579L11.4142 0ZM3 9.13148V2H10.5858L13 4.41421V8.91935L10.25 6.71936L6.4463 9.76233L4.25001 8.29813L3 9.13148ZM3 11.5352V14H13V11.4806L10.25 9.28061L6.55372 12.2376L4.25001 10.7018L3 11.5352Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Image16;
