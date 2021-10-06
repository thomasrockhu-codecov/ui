import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Feedback24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 2H1v21.08L7.35 18H23V2zM3 18.92V4h18v12H6.65L3 18.92z"
        fill={iconColor}
      />
      <path
        d="M12 6l1.384 2.309L16 8.917l-1.76 2.035.232 2.684L12 12.586l-2.472 1.05.232-2.684L8 8.917l2.616-.608L12 6z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Feedback24;
