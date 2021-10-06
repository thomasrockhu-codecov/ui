import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronLeft24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M17.95 2l-9.5 9.973L18 22h-2.45L6 11.973 15.5 2h2.45z" fill={iconColor} />
    </svg>
  );
};

export default ChevronLeft24;
