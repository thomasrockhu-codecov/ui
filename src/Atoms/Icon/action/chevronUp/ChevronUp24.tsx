import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronUp24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M22 17.95l-9.973-9.5L2 18v-2.45L12.027 6 22 15.5v2.45z" fill={iconColor} />
    </svg>
  );
};

export default ChevronUp24;
