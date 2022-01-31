import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Warning16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M9 9.75H7V6h2v3.75ZM9 10.5v1.75H7V10.5h2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.12a2.34 2.34 0 0 0-4 0L.34 11.59C-.61 13.16.6 15 2.32 15h11.36c1.72 0 2.93-1.84 2-3.4L9.98 2.11ZM7.71 3.15A.31.31 0 0 1 8 3c.13 0 .23.06.28.15l5.68 9.47c.05.08.05.16 0 .23a.31.31 0 0 1-.28.15H2.32a.31.31 0 0 1-.28-.15.21.21 0 0 1 0-.23l5.68-9.47Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Warning16.displayName = 'Icon.Warning';

export default Warning16;
