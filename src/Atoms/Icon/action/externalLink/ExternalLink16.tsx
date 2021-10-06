import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const ExternalLink16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        d="M13 11.9l2-2V1H6.1l-2 2h7.486L1.293 13.293l1.414 1.414L13 4.414V11.9z"
        fill={iconColor}
      />
    </svg>
  );
};

export default ExternalLink16;
