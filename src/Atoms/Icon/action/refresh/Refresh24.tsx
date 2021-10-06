import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Refresh24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M13.243 3l-3-3h2.828l4 4-4 4h-2.828l3-3H12a7 7 0 107 7h2a9 9 0 11-9-9h1.243z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Refresh24;
