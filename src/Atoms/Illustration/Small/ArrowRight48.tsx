import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const ArrowRight48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        d="M4.00024 22.9997L4.00024 24.9997L40.1718 24.9997L27.1718 37.9997H30.0002L43.9997 24.0003L29.9992 9.99974L27.1708 9.99974L40.1708 22.9997L4.00024 22.9997Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default ArrowRight48;
