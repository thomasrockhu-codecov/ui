import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const StatusError64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M31 40L31 16H33L33 40H31Z" fill="currentColor" />
      <path d="M31 44V48H33V44H31Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5858 5H43.4142L59 20.5858V43.4142L43.4142 59H20.5858L5 43.4142V20.5858L20.5858 5ZM21.4142 7L7 21.4142L7 42.5858L21.4142 57H42.5858L57 42.5858V21.4142L42.5858 7H21.4142Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default StatusError64;
