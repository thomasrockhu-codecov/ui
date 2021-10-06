import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Cross32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M3.274 1.86L1.86 3.274l12.728 12.728L1.86 28.73l1.414 1.414 12.728-12.728L28.73 30.144l1.414-1.414-12.728-12.728L30.144 3.274 28.73 1.86 16.002 14.588 3.274 1.86z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Cross32;
