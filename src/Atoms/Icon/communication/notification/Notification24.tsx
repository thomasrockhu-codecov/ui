import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Notification24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M19 9a4 4 0 100-8 4 4 0 000 8z" fill={iconColor} />
      <path
        d="M21 18v-7.341A5.99 5.99 0 0119 11v7a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h7c0-.701.12-1.374.341-2H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Notification24;
