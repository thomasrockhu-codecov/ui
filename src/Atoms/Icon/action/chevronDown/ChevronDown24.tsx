import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronDown24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M2 6.051l9.973 9.5L22 6v2.45L11.973 18 2 8.5V6.051z" fill={iconColor} />
    </svg>
  );
};

export default ChevronDown24;
