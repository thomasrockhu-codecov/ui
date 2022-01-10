import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Document16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M11 8H5V6h6v2zM5 12h6v-2H5v2z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.414 0H1v16h14V3.586L11.414 0zM3 14V2h7.586L13 4.414V14H3z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Document16.displayName = 'Icon.Document';

export default Document16;
