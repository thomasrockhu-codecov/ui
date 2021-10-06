import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const StarFill24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M12 1.5l3.807 6.35L23 9.52l-4.84 5.596.638 7.383L12 19.61 5.202 22.5l.638-7.383L1 9.521 8.193 7.85 12 1.5z"
        fill={iconColor}
      />
    </svg>
  );
};

export default StarFill24;
