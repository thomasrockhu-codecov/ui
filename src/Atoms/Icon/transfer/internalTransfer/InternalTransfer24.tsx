import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const InternalTransfer24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11a1 1 0 100 2 1 1 0 000-2zm-3 1a3 3 0 116 0 3 3 0 01-6 0z"
        fill={iconColor}
      />
      <path
        d="M22.5 12.082l1.499-1.5v2.829l-2.502 2.502L19 13.414v-2.828l1.5 1.5V7H1.5V5h21v7.082zM0 10.59v2.828l1.5-1.5V19h21v-2h-19v-5.086l1.5 1.5v-2.828L2.502 8.087 0 10.59z"
        fill={iconColor}
      />
    </svg>
  );
};

export default InternalTransfer24;
