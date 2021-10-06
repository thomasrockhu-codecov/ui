import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronLeft16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path d="M13.42 0l-8 8 8 8h-2.828l-8-8 8-8h2.828z" fill={iconColor} />
    </svg>
  );
};

export default ChevronLeft16;
