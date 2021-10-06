import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ExternalLink24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M20.003 16.426V5.414L3.41 22.007l-1.414-1.414L18.589 4H6.973l2-2h13.03v12.426l-2 2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ExternalLink24;
