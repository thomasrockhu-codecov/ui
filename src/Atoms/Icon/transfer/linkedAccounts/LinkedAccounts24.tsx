import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LinkedAccounts24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.808 18.364a3 3 0 010-4.243L7.051 9.88l1.414 1.414-4.242 4.243a1 1 0 000 1.414l2.828 2.828a1 1 0 001.414 0l4.243-4.242 1.414 1.414-4.243 4.242a3 3 0 01-4.242 0l-2.829-2.828zM21.193 5.636a3 3 0 010 4.243l-4.242 4.242-1.415-1.414 4.243-4.243a1 1 0 000-1.414L16.95 4.222a1 1 0 00-1.415 0l-4.242 4.242L9.879 7.05l4.243-4.242a3 3 0 014.243 0l2.828 2.828z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.536 9.879L9.88 15.536 8.465 14.12l5.657-5.657 1.414 1.415z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default LinkedAccounts24;
