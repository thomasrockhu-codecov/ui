import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Financial16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M15.872 3.149L8 0 .13 3.149l.743 1.857L8 2.154l7.129 2.852.743-1.857zM4 6v7H2V6h2zM1 16h14v-2H1v2zM9 6v7H7V6h2zM14 6v7h-2V6h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Financial16;
