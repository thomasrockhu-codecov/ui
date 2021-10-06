import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const OtherIndustry16: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={16} height={16} fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7V0h7v7H0zm2-5h3v3H2V2zM0 16V9h7v7H0zm2-5h3v3H2v-3zM9 0v7h7V0H9zm5 2h-3v3h3V2zM9 16V9h7v7H9zm2-5h3v3h-3v-3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default OtherIndustry16;
