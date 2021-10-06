import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Login16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path
        d="M12 14H5v-2H3v4h9a3 3 0 003-3V3a3 3 0 00-3-3H3v4h2V2h7a1 1 0 011 1v10a1 1 0 01-1 1z"
        fill={iconColor}
      />
      <path d="M7.23 5H4.62l1.846 2H1v2h5.465L4.62 11H7.23L10 8 7.23 5z" fill={iconColor} />
    </svg>
  );
};

export default Login16;
