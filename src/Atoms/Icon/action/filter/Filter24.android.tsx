import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Filter24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 11l7-10H1l7 10v12l8-4v-8zm-2 6.764V10.37L19.159 3H4.84L10 10.37v9.394l4-2z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Filter24;
