import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Fund64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M9 9H43V17H55V55H53V19H43V55H41V11H11V34H9V9Z" fill="currentColor" />
      <path
        d="M22 21H27.5858L9 39.5858V55H11L11 40.4142L29 22.4142V28L31 26V19H24L22 21Z"
        fill="currentColor"
      />
      <path d="M15 51H37V49H15V51Z" fill="currentColor" />
      <path d="M37 46H15V44H37V46Z" fill="currentColor" />
      <path d="M29 41H37V39H29V41Z" fill="currentColor" />
    </IllustrationBase>
  );
};

export default Fund64;
