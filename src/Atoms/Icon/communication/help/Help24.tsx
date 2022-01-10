import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Help24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12.552 14h-1.834v-.351c0-.933 0-1.37 1.414-2.521l.134-.11c.552-.447.972-.788.972-1.346 0-.532-.378-.952-1.134-.952-.784 0-1.218.49-1.4 1.078H8.59C8.87 7.894 10.298 6.9 12.146 6.9c1.946 0 3.276 1.036 3.276 2.674 0 1.092-.462 1.666-1.708 2.73l-.051.043c-.561.467-.96.799-1.069 1.329l-.042.324zM10.72 15h2v2h-2v-2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-2 0a9 9 0 11-18 0 9 9 0 0118 0z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Help24.displayName = 'Icon.Help';

export default Help24;
