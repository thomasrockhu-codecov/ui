import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const StatusInformation64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        d="M42.6066 44.0208L32 33.4142L21.3934 44.0208L19.9792 42.6066L30.5858 32L19.9792 21.3934L21.3934 19.9792L32 30.5858L42.6066 19.9792L44.0208 21.3934L33.4142 32L44.0208 42.6066L42.6066 44.0208Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M58 32C58 46.3594 46.3594 58 32 58C17.6406 58 6 46.3594 6 32C6 17.6406 17.6406 6 32 6C46.3594 6 58 17.6406 58 32ZM56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default StatusInformation64;
