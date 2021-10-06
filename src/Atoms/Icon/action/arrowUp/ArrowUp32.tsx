import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowUp32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path d="M5 14.828l10-10V31h2V4.824l10 10v-2.828L16.004 1H16L5 12v2.828z" fill={iconColor} />
    </svg>
  );
};

export default ArrowUp32;
