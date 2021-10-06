import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Check8: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={8} height={8} fill="none">
      <path
        d="M1.504 2.648L3.126 4.27 6.496.9 7.91 2.314 3.126 7.098.09 4.062l1.414-1.414z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Check8;
