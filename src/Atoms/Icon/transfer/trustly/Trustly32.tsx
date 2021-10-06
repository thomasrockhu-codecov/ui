import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Trustly32: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4h30v11h-9v13H10v-6.414L15.586 16 12 12.414V15H1V4zm2 2v7h7V7.586L18.414 16 12 22.414V26h8V13h9V6H3z"
        fill={iconColor}
      />
    </svg>
  );
};

export default Trustly32;
