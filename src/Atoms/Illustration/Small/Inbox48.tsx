import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const Inbox48: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={48} height={48}>
      <path d="M15 12H33V10H15V12Z" fill="currentColor" />
      <path d="M33 18H15V16H33V18Z" fill="currentColor" />
      <path d="M15 24H33V22H15V24Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3H39V11.5858L45 17.5858V45H3V17.5858L9 11.5858V3ZM39 21.0101V14.4142L42.5335 17.9477L39 21.0101ZM37 5V22.7434L28.627 30L19.373 30L11 22.7434V5H37ZM9 14.4142V21.01L5.46652 17.9477L9 14.4142ZM5 20.19V41.8101L17.4731 31L5 20.19ZM19.373 32L6.68074 43H41.3193L28.6271 32L19.373 32ZM30.5269 31L43 41.81V20.19L30.5269 31Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default Inbox48;
