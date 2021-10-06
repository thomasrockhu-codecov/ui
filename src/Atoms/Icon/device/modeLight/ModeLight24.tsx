import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ModeLight24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M13 2v3h-2V2h2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a5 5 0 1110 0 5 5 0 01-10 0zm5-3a3 3 0 100 6 3 3 0 000-6z"
        fill={iconColor}
      />
      <path
        d="M13 22v-3h-2v3h2zM2 11h3v2H2v-2zM22 11h-3v2h3v-2zM5.636 4.222l2.121 2.121-1.414 1.414-2.121-2.121 1.414-1.414zM19.778 18.364l-2.121-2.121-1.414 1.414 2.121 2.121 1.414-1.414zM4.222 18.364l2.121-2.121 1.414 1.414-2.121 2.121-1.414-1.414zM18.364 4.222l-2.122 2.121 1.415 1.414 2.121-2.12-1.414-1.415z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ModeLight24;
