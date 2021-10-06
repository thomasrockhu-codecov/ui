import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Consumer32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M4.232 7H0V5h5.768l4 15h15.464l3.466-13H10V5h21.302l-4.534 17H8.232l-4-15zM24 28a2 2 0 100-4 2 2 0 000 4zM12 26a2 2 0 11-4 0 2 2 0 014 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Consumer32;
