import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Transportation24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.634 3H1V1h13.634c1.304 0 2.511.731 3.075 1.909l4.972 10.384c.807 1.687.028 3.655-1.666 4.408a3.468 3.468 0 01-1.41.299H1v-2h18.606c.207 0 .41-.043.596-.126.707-.315.976-1.089.675-1.717L20.323 13H11.4C9.549 13 8 11.534 8 9.667V7.333C8 5.466 9.549 4 11.4 4h4.614l-.108-.228A1.401 1.401 0 0014.633 3zm2.338 3l2.394 5H11.4c-.8 0-1.4-.623-1.4-1.333V7.333C10 6.623 10.6 6 11.4 6h5.572z"
        fill={iconColor}
      />
      <path d="M20 22h-4v1h-2v-1h-4v1H8v-1H4v1H2v-1H1v-2h22v2h-1v1h-2v-1z" fill={iconColor} />
    </svg>
  );
};

export default Transportation24;
