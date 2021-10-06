import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Information24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path d="M11 9V7h2v2h-2zM11 17v-7h2v7h-2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2a9 9 0 100-18 9 9 0 000 18z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Information24;
