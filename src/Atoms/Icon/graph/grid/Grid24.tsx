import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Grid24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 23v-6H1v-2h6V9H1V7h6V1h2v6h6V1h2v6h6v2h-6v6h6v2h-6v6h-2v-6H9v6H7zm8-8V9H9v6h6z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Grid24;
