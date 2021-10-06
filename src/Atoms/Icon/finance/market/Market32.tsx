import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Market32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1a3 3 0 00-3 3v27h27a3 3 0 003-3V1H4zM3 4a1 1 0 011-1h25v5.586l-9.094 9.094-8-6L3 20.586V4zm0 19.414V29h25a1 1 0 001-1V11.414l-8.906 8.906-8-6L3 23.414z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Market32;
