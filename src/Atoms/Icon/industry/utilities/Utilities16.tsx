import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Utilities16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M4 6a4 4 0 115 3.874V13h2v-1.803a6 6 0 10-6 0V13h2V9.874A4.002 4.002 0 014 6zM11 16v-2H5v2h6z"
        fill={iconColor}
      />
      <path d="M8 5a1 1 0 011 1h2a3 3 0 00-3-3v2z" fill={iconColor} />
    </svg>
  );
};

export default Utilities16;
