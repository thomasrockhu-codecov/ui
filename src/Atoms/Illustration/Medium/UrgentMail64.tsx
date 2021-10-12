import React from 'react';

import { IllustrationBase } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const UrgentMail64: React.FC<IllustrationProps> = (props) => {
  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path d="M49 21V16H51V21H49Z" fill="currentColor" />
      <path d="M49 22V24H51V22H49Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.5858 12H53.4142L58 16.5858V23.4142L53.4142 28H46.5858L42 23.4142V16.5858L46.5858 12ZM47.4142 14L44 17.4142V22.5858L47.4142 26H52.5858L56 22.5858V17.4142L52.5858 14H47.4142Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18H40V20H14.7205L32 34.6876L41.5609 26.5608L42.9797 27.9797L38.3898 31.8812L51 42.81V30H53V46H11V18ZM13 42.81L25.6102 31.8812L13 21.1624V42.81ZM27.152 33.1916L14.6807 44H49.3193L36.8481 33.1916L32 37.3124L27.152 33.1916Z"
        fill="currentColor"
      />
    </IllustrationBase>
  );
};

export default UrgentMail64;
