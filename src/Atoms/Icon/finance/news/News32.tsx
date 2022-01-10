import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const News32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M19 7H9v8h10V7Zm-8 6V9h6v4h-6Z" />
        <path d="M27 10h-6V8h6v2Zm-6 4h6v-2h-6v2Zm6 5H9v-2h18v2ZM9 23h18v-2H9v2Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3h26v22a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V12h4V3Zm23 23H6.83A3 3 0 0 0 7 25V5h22v20a1 1 0 0 1-1 1ZM3 14v11a1 1 0 1 0 2 0V14H3Z"
        />
      </g>
    </IconBase>
  );
};

News32.displayName = 'Icon.News';

export default News32;
