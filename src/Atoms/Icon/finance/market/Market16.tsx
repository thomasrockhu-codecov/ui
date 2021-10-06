import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Market16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0a3 3 0 00-3 3v13h13a3 3 0 003-3V0H3zM2 3a1 1 0 011-1h11v1.586L9.803 7.783l-4-2L2 9.586V3zm0 9.414V14h11a1 1 0 001-1V6.414l-3.803 3.803-4-2L2 12.414z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Market16;
