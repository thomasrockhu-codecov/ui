import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Article24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <g fill="currentColor">
        <path d="M1 7H23V5H1V7Z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1 9H11V19H1V9ZM3 11V17H9V11H3Z" />
        <path d="M23 11H13V9H23V11Z" />
        <path d="M13 19H23V17H13V19Z" />
        <path d="M23 15H13V13H23V15Z" />
      </g>
    </IconBase>
  );
};

Article24.displayName = 'Icon.Article';

export default Article24;
