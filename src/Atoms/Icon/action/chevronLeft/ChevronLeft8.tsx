import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ChevronLeft8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={9} fill="none">
      <path d="M7.414.014l-4 4 4 4H4.586l-4-4 4-4h2.828z" fill={iconColor} />
    </svg>
  );
};

export default ChevronLeft8;
