import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Add16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M7 9v7h2V9h7V7H9V0H7v7H0v2h7z" fill={iconColor} />
    </svg>
  );
};

export default Add16;
