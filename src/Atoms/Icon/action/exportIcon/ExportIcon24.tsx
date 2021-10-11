import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExportIcon24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M7.99999 6.00001V8.82844L11 5.82843L11 17H13L13 5.82843L16 8.82841V5.99999L12 2L7.99999 6.00001Z"
        fill="currentColor"
      />
      <path
        d="M4 19V16H2V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V16H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default ExportIcon24;
