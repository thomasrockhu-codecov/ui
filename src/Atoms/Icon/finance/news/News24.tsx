import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const News24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 5h6v6H8V5Zm2 2v2h2V7h-2Z"
        fill="currentColor"
      />
      <path d="M16 7h4V5h-4v2Zm4 4h-4V9h4v2ZM8 13v2h12v-2H8Zm0 6v-2h12v2H8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1h20v19a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8h4V1Zm2 19a3 3 0 0 1-.17 1H21a1 1 0 0 0 1-1V3H6v17Zm-3 1a1 1 0 0 0 1-1V10H2v10a1 1 0 0 0 1 1Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

News24.displayName = 'Icon.News';

export default News24;
