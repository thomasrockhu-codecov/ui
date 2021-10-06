import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Attachment24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.364 20.506a3 3 0 004.243 0l8.485-8.485A5 5 0 1012.02 4.95l-8.569 8.568-1.414-1.414 8.569-8.568a7 7 0 019.9 9.899L12.02 21.92a5 5 0 01-7.071-7.07l8.485-8.486a3 3 0 114.243 4.243l-6.364 6.364-1.415-1.415 6.364-6.364a1 1 0 00-1.414-1.414l-8.485 8.486a3 3 0 000 4.242z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Attachment24;
