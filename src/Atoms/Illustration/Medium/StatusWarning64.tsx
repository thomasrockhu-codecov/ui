import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const StatusWarning64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M31 20L31 42H33L33 20H31Z" fill="currentColor" />
      <path d="M31 50V46H33V50H31Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.0399 10.2826C28.1043 4.87477 35.8957 4.87478 38.9602 10.2826L59.2317 46.0559C62.2538 51.389 58.4013 58 52.2715 58H11.7285C5.59871 58 1.74627 51.389 4.76835 46.0559L25.0399 10.2826ZM37.2202 11.2687L57.4917 47.0419C59.7582 51.0417 56.8689 56 52.2715 56H11.7285C7.13116 56 4.24183 51.0417 6.50839 47.0419L26.7799 11.2687C29.0782 7.21277 34.9218 7.21277 37.2202 11.2687Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default StatusWarning64;
