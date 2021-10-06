import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowDown16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M6.998 11.17l-4-4v2.828l5 5 5-5V7.168l-4 4V1.002h-2V11.17z" fill={iconColor} />
    </svg>
  );
};

export default ArrowDown16;
