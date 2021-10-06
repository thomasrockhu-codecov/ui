import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Cross8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <path
        d="M2.586 4L0 6.586 1.414 8 4 5.414 6.586 8 8 6.586 5.414 4 8 1.414 6.586 0 4 2.586 1.414 0 0 1.414 2.586 4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Cross8;
