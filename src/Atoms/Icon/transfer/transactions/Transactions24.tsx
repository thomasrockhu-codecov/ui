import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Transactions24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M16.173 11H19L23 7.001V7L19.001 3h-2.828l3 3H3v2h16.173l-3 3zM7.827 13H5L1 16.999v.002L4.999 21h2.828l-3-3H21v-2H4.827l3-3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Transactions24;
