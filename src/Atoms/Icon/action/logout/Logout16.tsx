import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Logout16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M11 2H4a1 1 0 00-1 1v10a1 1 0 001 1h7v-2h2v4H4a3 3 0 01-3-3V3a3 3 0 013-3h9v4h-2V2z"
        fill={iconColor}
      />
      <path d="M10.619 5h2.611L16 8l-2.77 3H10.62l1.846-2H7V7h5.465L10.62 5z" fill={iconColor} />
    </IconBase>
  );
};

export default Logout16;
