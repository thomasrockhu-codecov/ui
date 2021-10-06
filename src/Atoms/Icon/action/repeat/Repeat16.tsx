import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Repeat16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M14 1v3.392A7.003 7.003 0 001.29 6h2.126a5.001 5.001 0 019.168 0H9l2 2h5V3l-2-2zM14.71 10h-2.126a5.001 5.001 0 01-9.168 0H7L5 8H0v5l2 2v-3.392A7.003 7.003 0 0014.71 10z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Repeat16;
