import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Withdraw24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9a3 3 0 100 6 3 3 0 000-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3h4V1H4a3 3 0 00-3 3v16a3 3 0 003 3h4v-2H4a1 1 0 01-1-1v-1h20V5H3V4a1 1 0 011-1zm17 4v10H3V7h18z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Withdraw24;
