import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Orders32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M6 3C4.34315 3 3 4.34315 3 6V29H5V6C5 5.44772 5.44772 5 6 5H26C26.5523 5 27 5.44772 27 6V29H29V6C29 4.34315 27.6569 3 26 3H6Z"
        fill={iconColor}
      />
      <path d="M8 11H24V9H8V11Z" fill={iconColor} />
      <path d="M24 17H8V15H24V17Z" fill={iconColor} />
      <path d="M8 23H16V21H8V23Z" fill={iconColor} />
    </svg>
  );
};

export default Orders32;
