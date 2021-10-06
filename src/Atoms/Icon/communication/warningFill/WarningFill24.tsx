import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const WarningFill24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.787 3.032c-.794-1.376-2.78-1.376-3.574 0L1.28 18.505c-.794 1.376.199 3.095 1.787 3.095h17.868c1.588 0 2.58-1.72 1.787-3.095L13.787 3.032zM13 15V7h-2v8h2zm0 4v-2h-2v2h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default WarningFill24;
