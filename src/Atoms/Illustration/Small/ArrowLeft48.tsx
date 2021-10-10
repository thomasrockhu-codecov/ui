import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const ArrowLeft48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        d="M43.9997 24.9997V22.9997L7.82816 22.9997L20.8282 9.99974L17.9997 9.99974L4.00024 23.9992L18.0008 37.9997H20.8292L7.82918 24.9997L43.9997 24.9997Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default ArrowLeft48;
