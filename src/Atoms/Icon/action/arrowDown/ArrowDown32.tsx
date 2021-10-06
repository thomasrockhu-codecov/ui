import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowDown32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M27 17.172l-10 10V1h-2v26.176l-10-10v2.828L15.996 31H16l11-11v-2.828z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ArrowDown32;
