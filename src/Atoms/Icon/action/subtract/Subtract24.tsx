import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Subtract24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path fill={iconColor} d="M1 11h22v2H1z" />
    </svg>
  );
};

export default Subtract24;
