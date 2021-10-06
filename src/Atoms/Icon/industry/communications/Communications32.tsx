import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Communications32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path stroke={iconColor} strokeWidth={2} d="M6 13h3" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.203 24.798c-.714.133-1.45.202-2.203.202H1V13C1 6.373 6.373 1 13 1s12 5.373 12 12c0 .752-.07 1.489-.202 2.203A8.003 8.003 0 0131 23v8h-8c-3.8 0-6.981-2.65-7.797-6.202zM23 13c0 .686-.069 1.355-.2 2.002a8 8 0 00-7.798 7.797c-.647.132-1.316.201-2.002.201H3V13C3 7.477 7.477 3 13 3s10 4.477 10 10zm-3 11h-2v-2h2v2zm8 0h-2v-2h2v2zm-6 0h2v-2h-2v2z"
        fill={iconColor}
      />
      <path stroke={iconColor} strokeWidth={2} d="M11.5 13h3M17 13h3" />
    </svg>
  );
};

export default Communications32;
