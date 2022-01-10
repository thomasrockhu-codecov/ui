import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const UserIdTouch24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M7 13V9a5 5 0 015-5M17 16V9a4.98 4.98 0 00-.5-2.182M12 4c1.002 0 1.936.295 2.719.803M14 12v2M10 11v3M10 11V9a2 2 0 012-2M14 11V9a1.99 1.99 0 00-.389-1.185M10 13v2a2 2 0 104 0"
        stroke="currentColor"
        strokeWidth={2}
        fill="transparent"
      />
      <path
        d="M4 11.5V13m0 1v1a8 8 0 1016 0V9A8 8 0 104 9v1.5M7 15a5 5 0 008.5 3.57"
        stroke="currentColor"
        strokeWidth={2}
        fill="transparent"
      />
    </IconBase>
  );
};

UserIdTouch24.displayName = 'Icon.UserIdTouch';

export default UserIdTouch24;
