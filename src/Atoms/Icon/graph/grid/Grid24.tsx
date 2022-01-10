import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Grid24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 23v-6H1v-2h6V9H1V7h6V1h2v6h6V1h2v6h6v2h-6v6h6v2h-6v6h-2v-6H9v6H7zm8-8V9H9v6h6z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Grid24.displayName = 'Icon.Grid';

export default Grid24;
