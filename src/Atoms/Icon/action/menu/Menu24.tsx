import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Menu24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M1 4h22v2H1V4zM1 11h22v2H1v-2zM23 18H1v2h22v-2z" fill={iconColor} />
    </svg>
  );
};

export default Menu24;
