import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ExclamationMark32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2v20h-2V2h2zM17 26v4h-2v-4h2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ExclamationMark32;
