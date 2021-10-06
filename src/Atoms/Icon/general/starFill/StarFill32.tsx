import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const StarFill32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M16 2l5.076 8.466 9.59 2.229-6.453 7.462.851 9.843L16 26.146 6.935 30l.851-9.843-6.453-7.462 9.59-2.23L16 2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default StarFill32;
