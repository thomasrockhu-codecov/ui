import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Error16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M1 5.1L5.1 1h5.8L15 5.1v5.8L10.9 15H5.1L1 10.9V5.1z"
        stroke={iconColor}
        strokeWidth={2}
        fill="transparent"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4v5H7V4h2zM9 10v2H7v-2h2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Error16;
