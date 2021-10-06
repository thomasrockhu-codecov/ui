import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Deposit16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2h-4V0h4a2 2 0 012 2v12a2 2 0 01-2 2h-4v-2h4v-1H0V3h14V2zM2 5h12v6H2V5z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Deposit16;
