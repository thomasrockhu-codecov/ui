import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Menu32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path d="M1 5h30v2H1V5zM1 15h30v2H1v-2zM31 25H1v2h30v-2z" fill={iconColor} />
    </svg>
  );
};

export default Menu32;
