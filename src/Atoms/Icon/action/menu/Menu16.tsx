import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Menu16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M0 1h16v2H0V1zM0 7h16v2H0V7zM16 13H0v2h16v-2z" fill={iconColor} />
    </svg>
  );
};

export default Menu16;
