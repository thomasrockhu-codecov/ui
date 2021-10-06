import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Check24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.778 17.435l-6.364-6.364L1 12.485l7.778 7.779 14.85-14.85L22.212 4 8.778 17.435z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Check24;
