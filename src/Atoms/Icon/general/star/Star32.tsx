import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Star32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.076 10.466L16 2l-5.076 8.466-9.591 2.229 6.453 7.462L6.936 30 16 26.146 25.064 30l-.851-9.843 6.453-7.462-9.59-2.23zm5.91 3.427l-7.19-1.671L16 5.889l-3.797 6.333-7.19 1.67 4.839 5.595-.638 7.37L16 23.973l6.785 2.886-.637-7.37 4.838-5.595z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Star32;
