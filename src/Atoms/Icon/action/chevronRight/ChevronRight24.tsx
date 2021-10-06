import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronRight24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M6.05 22l9.5-9.973L6 2h2.45L18 12.027 8.5 22H6.05z" fill={iconColor} />
    </svg>
  );
};

export default ChevronRight24;
