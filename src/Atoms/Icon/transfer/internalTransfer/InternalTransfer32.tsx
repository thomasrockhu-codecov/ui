import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const InternalTransfer32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={33} height={32} viewBox="0 0 33 32" fill="none">
      <path d="M2 9h27v9.172l-2-2V19l3 3 3-3v-2.828l-2 2V7H2v2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 20a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
        fill={iconColor}
      />
      <path d="M4 23h27v2H2V13.828l-2 2V13l3-3 3 3v2.828l-2-2V23z" fill={iconColor} />
    </svg>
  );
};

export default InternalTransfer32;
