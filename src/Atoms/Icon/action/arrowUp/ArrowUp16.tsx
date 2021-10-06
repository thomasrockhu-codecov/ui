import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowUp16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M8.998 4.83l4 4V6.003l-5-5-5 5v2.829l4-4v10.166h2V4.832z" fill={iconColor} />
    </svg>
  );
};

export default ArrowUp16;
