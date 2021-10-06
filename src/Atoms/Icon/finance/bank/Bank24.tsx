import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Bank24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M12 .936L23.342 5.06l-.684 1.88L12 3.064 1.342 6.94.658 5.06 12 .936z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10h2v10h2v-3h8v3h2V10h2v10h2V8h-7.17a3.001 3.001 0 00-5.66 0H2v12h2V10zm5.17 0H8v5h8v-5h-1.17a3.001 3.001 0 01-5.66 0zM11 9a1 1 0 112 0 1 1 0 01-2 0z"
        fill={iconColor}
      />
      <path d="M1 21v2h22v-2H1z" fill={iconColor} />
    </svg>
  );
};

export default Bank24;
