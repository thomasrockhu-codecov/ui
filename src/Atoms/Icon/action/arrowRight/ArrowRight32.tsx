import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowRight32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M17.172 5l10 10H1v2h26.176l-10 10h2.828L31 16.004V16L20 5h-2.828z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ArrowRight32.displayName = 'Icon.ArrowRight';

export default ArrowRight32;
