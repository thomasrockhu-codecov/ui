import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Warning24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M14 15V7h-2v8h2Zm0 4v-2h-2v2h2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6528 2.53158c-1.179-2.042107-4.1265-2.042108-5.3056 0L1.41349 18.0053c-1.179011 2.0421.29475 4.5948 2.65278 4.5948H21.9338c2.358 0 3.8318-2.5527 2.6528-4.5948L15.6528 2.53158Zm-3.5735 1c.4092-.70877 1.4322-.70877 1.8415 0l8.9337 15.47372c.4092.7088-.1023 1.5948-.9207 1.5948H4.06627c-.81842 0-1.32994-.886-.92073-1.5948L12.0793 3.53158Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Warning24;
