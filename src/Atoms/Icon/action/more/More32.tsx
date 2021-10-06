import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const More32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4zM16 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4zM31 16a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        fill={iconColor}
      />
    </svg>
  );
};

export default More32;
