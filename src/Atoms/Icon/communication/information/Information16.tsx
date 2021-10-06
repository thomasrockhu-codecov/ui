import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Information16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path d="M7 4h2v2H7V4zM7 7h2v5H7V7z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Information16;
