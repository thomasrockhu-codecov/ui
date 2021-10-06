import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Login24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M19 3a1 1 0 011 1v16a1 1 0 01-1 1H8v-3H6v5h13a3 3 0 003-3V4a3 3 0 00-3-3H6v5h2V3h11z"
        fill={iconColor}
      />
      <path d="M7.828 8l3 3H2v2h8.828l-3 3h2.829l4-4-4-4H7.828z" fill={iconColor} />
    </IconBase>
  );
};

export default Login24;
