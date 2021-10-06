import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Bank32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M30.394 8.579l-.788 1.838L16 4.586 2.394 10.417 1.606 8.58 16 2.41l14.394 6.169z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.126 10.498a4.002 4.002 0 017.748 0H27v15h-2v-13h-2v13h-2v-3H11v3H9v-13H7v13H5v-15h7.126zm0 2H11v8h10v-8h-1.126a4.002 4.002 0 01-7.748 0zm1.874-1a2 2 0 114 0 2 2 0 01-4 0z"
        fill={iconColor}
      />
      <path d="M30 27.498v2H2v-2h28z" fill={iconColor} />
    </svg>
  );
};

export default Bank32;
