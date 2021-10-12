import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Share24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9C16.8888 9 15.8833 8.54685 15.1585 7.81526L9.85018 10.9118C9.94778 11.2578 10 11.6228 10 12C10 12.3772 9.94778 12.7422 9.85018 13.0882L15.1585 16.1847C15.8833 15.4531 16.8887 15 18 15C20.2091 15 22 16.7909 22 19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19C14 18.6228 14.0522 18.2578 14.1498 17.9118L8.84152 14.8153C8.11666 15.5469 7.11125 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.11125 8 8.11666 8.45315 8.84153 9.18474L14.1498 6.08824C14.0522 5.74224 14 5.37722 14 5C14 2.79086 15.7909 1 18 1C20.2091 1 22 2.79086 22 5C22 7.20914 20.2091 9 18 9ZM20 5C20 6.10457 19.1046 7 18 7C16.8967 7 16 6.10905 16 5.00448C16 3.89991 16.8954 3 18 3C19.1046 3 20 3.89543 20 5ZM6 10C6.36123 10 6.70009 10.0958 6.99258 10.2633C7.59205 10.6066 7.99674 11.2515 7.99998 11.991C7.99999 11.994 8 11.997 8 12C8 12.003 7.99999 12.0059 7.99998 12.0089C7.99674 12.7485 7.59205 13.3934 6.99257 13.7367C6.70008 13.9042 6.36122 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10ZM16 19C16 20.1046 16.8954 21 18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Share24;
