import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const BuySellDots16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M12 8.828l-4-4v10.167H6V4.828l-4 4V6l5-5 5 5v2.828zM12 15.167l4 4V9h2v10.167l4-4v2.828l-5 5-5-5v-2.828z"
        fill={iconColor}
      />
    </svg>
  );
};

export default BuySellDots16;
