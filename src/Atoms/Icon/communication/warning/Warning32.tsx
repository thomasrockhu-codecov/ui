import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Warning32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <g fill="currentColor">
        <path d="M17 21V9L15 9.00004V21.0001L17 21Z" />
        <path d="M17 25.0001V23L15 23.0001V25.0001L17 25.0001Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8594 3.81661C14.2548 1.39446 17.7451 1.39447 19.1405 3.81661L30.5108 23.5534C31.9036 25.9712 30.1648 29 27.3702 29H4.62974C1.83522 29 0.0963361 25.9712 1.4892 23.5534L12.8594 3.81661ZM17.4075 4.81497C16.7815 3.72834 15.2184 3.72834 14.5924 4.81497L3.22219 24.5518C2.59368 25.6428 3.38152 27 4.62974 27H27.3702C28.6184 27 29.4063 25.6428 28.7778 24.5518L17.4075 4.81497Z"
        />
      </g>
    </IconBase>
  );
};

Warning32.displayName = 'Icon.Warning';

export default Warning32;
