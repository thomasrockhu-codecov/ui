import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Trustly24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 3v7.364h-7.228V21H7.91v-4.09L12.82 12l-4.91-4.91v3.274H1.5V3h21z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Trustly24;
