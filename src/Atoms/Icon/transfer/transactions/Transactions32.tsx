import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Transactions32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path
        d="M21.173 15H24l5-5-5-5h-2.828l4 4H7v2h18.173l-4 4zM9.828 17H7l-5 5 5 5h2.828l-4-4h18.173v-2H5.828l4-4z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Transactions32;
