import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Mail48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 10H3V38H45V10ZM5 34.81L17.6102 23.8812L5 13.1624V34.81ZM19.152 25.1916L6.68069 36H41.3193L28.8481 25.1916L24 29.3124L19.152 25.1916ZM43 13.1625V34.81L30.3898 23.8812L43 13.1625ZM6.72051 12L24 26.6876L41.2795 12H6.72051Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Mail48;
