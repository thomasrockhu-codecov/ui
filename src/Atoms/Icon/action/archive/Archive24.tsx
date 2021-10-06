import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Archive24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1v7h22V1H1zm20 2H3v3h18V3z"
        fill={iconColor}
      />
      <path d="M4 21V8H2v15h20V8h-2v13H4z" fill={iconColor} />
      <path d="M8 13.5h8v-2H8v2z" fill={iconColor} />
    </svg>
  );
};

export default Archive24;
