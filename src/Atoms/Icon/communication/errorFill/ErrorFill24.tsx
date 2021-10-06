import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ErrorFill24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.556 1H7.444L1 7.444v9.112L7.444 23h9.112L23 16.556V7.444L16.556 1zM13 6v8h-2V6h2zm0 12v-2h-2v2h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ErrorFill24;
