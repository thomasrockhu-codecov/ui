import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Book24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M9 9H4V7h5v2zM9 13H4v-2h5v2zM7 17H4v-2h3v2zM15 9h5V7h-5v2zM15 13h5v-2h-5v2zM15 17h3v-2h-3v2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.714 3H0v17.714h9.714c.608 0 .88.152 1.008.279.127.127.278.4.278 1.007h2c0-.608.152-.88.279-1.007.127-.127.4-.279 1.007-.279H24V3h-9.714c-.852 0-1.666.199-2.286.738C11.38 3.198 10.567 3 9.714 3zM11 6.286v12.612a4.206 4.206 0 00-1.286-.184H2V5h7.714c.608 0 .88.151 1.008.279.127.127.278.399.278 1.007zm2 0v12.612c.403-.13.84-.184 1.286-.184H22V5h-7.714c-.608 0-.88.151-1.007.279-.127.127-.279.399-.279 1.007z"
        fill="currentColor"
      />
    </IconBase>
  );
};

export default Book24;
