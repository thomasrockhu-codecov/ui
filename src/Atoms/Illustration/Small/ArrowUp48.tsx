import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const ArrowUp48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        d="M23 43.9995H25L25 7.82792L38 20.8279V17.9995L24.0005 4L10 18.0005L10 20.8289L23 7.82893L23 43.9995Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default ArrowUp48;
