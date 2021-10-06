import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ArrowLeft32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        d="M14.828 27l-10-10H31v-2H4.824l10-10h-2.828L1 15.996V16l11 11h2.828z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ArrowLeft32;
