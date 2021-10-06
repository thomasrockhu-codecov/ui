import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Filter24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M1 4h22v2H1V4zM4 11h16v2H4v-2zM17 18H7v2h10v-2z" fill={iconColor} />
    </svg>
  );
};

export default Filter24;
