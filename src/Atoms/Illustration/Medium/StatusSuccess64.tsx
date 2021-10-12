import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const StatusSuccess64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        d="M18.8642 30.9395L28.0566 40.1319L46.1484 22.04L47.5626 23.4542L28.0566 42.9603L17.45 32.3537L18.8642 30.9395Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58ZM32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default StatusSuccess64;
