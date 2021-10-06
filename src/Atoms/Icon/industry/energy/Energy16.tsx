import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Energy16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.263 0h8.303L11.71 5h3.179L6.332 16H3.597l1.555-7H1.12l5.143-9zm1.16 2L4.567 7h3.08l-1.262 5.676L10.8 7H8.263l2.857-5H7.424z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Energy16;
