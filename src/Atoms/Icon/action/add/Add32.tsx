import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Add32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path d="M15 17v14h2V17h14v-2H17V1h-2v14H1v2h14z" fill={iconColor} />
    </svg>
  );
};

export default Add32;
