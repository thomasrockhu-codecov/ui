import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const LinkedAccounts32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={33} height={32} viewBox="0 0 33 32" fill="none">
      <path
        d="M28.492 8.222a3 3 0 010 4.242l-6.128 6.129-1.414-1.415 6.128-6.128a1 1 0 000-1.414l-4.714-4.714a1 1 0 00-1.414 0l-6.128 6.128-1.414-1.414 6.128-6.128a3 3 0 014.242 0l4.715 4.714zM3.508 23.778a3 3 0 010-4.242l6.128-6.129 1.414 1.415-6.128 6.128a1 1 0 000 1.414l4.714 4.714a1 1 0 001.414 0l6.128-6.128 1.415 1.414-6.129 6.128a3 3 0 01-4.242 0l-4.714-4.714z"
        fill={iconColor}
      />
      <path d="M13.172 20.714l7.542-7.542-1.414-1.415-7.543 7.543 1.415 1.414z" fill={iconColor} />
    </svg>
  );
};

export default LinkedAccounts32;
