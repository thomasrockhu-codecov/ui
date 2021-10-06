import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowRight16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M11.167 9l-4 4h2.828l5-5-5-5H7.167l4 4H1v2h10.167z" fill={iconColor} />
    </svg>
  );
};

export default ArrowRight16;
