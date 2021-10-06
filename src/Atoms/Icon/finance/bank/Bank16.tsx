import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Bank16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M15.872 3.172l-.743 1.856L8 2.177.872 5.028.129 3.172 8 .022l7.872 3.15zM3 6v8h2v-4h2v4h2v-4h2v4h2V6h2v8h1v2H0v-2h1V6h2z"
        fill={iconColor}
      />
      <path d="M8 8a2 2 0 100-4 2 2 0 000 4z" fill={iconColor} />
    </svg>
  );
};

export default Bank16;
