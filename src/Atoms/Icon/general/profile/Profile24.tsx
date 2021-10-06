import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Profile24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8A5 5 0 117 8a5 5 0 0110 0zm-2 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill={iconColor}
      />
      <path
        d="M5 15a3 3 0 00-3 3v3h2v-3a1 1 0 011-1h14a1 1 0 011 1v3h2v-3a3 3 0 00-3-3H5z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Profile24;
