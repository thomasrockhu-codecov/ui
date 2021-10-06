import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowLeft16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M4.828 7l4-4H6L1 8l5 5h2.828l-4-4h10.167V7H4.828z" fill={iconColor} />
    </svg>
  );
};

export default ArrowLeft16;
