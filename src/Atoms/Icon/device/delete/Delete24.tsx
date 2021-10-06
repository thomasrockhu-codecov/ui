import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Delete24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path
        d="M12.586 12l-2.293-2.293 1.414-1.414L14 10.586l2.293-2.293 1.414 1.414L15.414 12l2.293 2.293-1.414 1.414L14 13.414l-2.293 2.293-1.414-1.414L12.586 12z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.54 4H23v16H7.54L.683 12 7.54 4zm.92 2l-5.143 6 5.143 6H21V6H8.46z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Delete24;
