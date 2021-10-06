import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const UserIdFace24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M8 1H1v7h2V3h5V1zM23 8V1h-7v2h5v5h2zM1 16v7h7v-2H3v-5H1zM16 23h7v-7h-2v5h-5v2zM7 9V6h2v3H7zM13 7h-2v4h-1v2h3V7zM15 9V6h2v3h-2zM12 16c-1.42 0-2.563-.72-3.19-1.587l-1.62 1.174C8.162 16.929 9.886 18 12 18c2.114 0 3.838-1.071 4.81-2.413l-1.62-1.174C14.562 15.28 13.42 16 12 16z"
        fill={iconColor}
      />
    </svg>
  );
};

export default UserIdFace24;
