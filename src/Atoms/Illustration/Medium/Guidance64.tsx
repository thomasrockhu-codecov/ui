import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Guidance64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11H31V6H33V11H52.4599L59.3171 19L52.4599 27H33V31L49 31V47H33V54H41V56H23V54H31V47L11.5401 47L4.68292 39L11.5401 31L31 31V27H15V11ZM17 13V25H51.5401L56.6829 19L51.5401 13H17ZM47 33V45L12.4599 45L7.31708 39L12.4599 33L47 33Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Guidance64;
