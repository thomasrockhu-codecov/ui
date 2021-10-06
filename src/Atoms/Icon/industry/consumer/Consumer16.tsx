import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Consumer16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M3.428 2H0v2h1.92l2 7h9.508L16 2H5.674v2h7.674L11.92 9H5.43l-2-7zM7 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Consumer16;
