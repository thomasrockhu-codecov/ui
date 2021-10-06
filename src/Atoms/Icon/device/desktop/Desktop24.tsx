import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Desktop24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 16V4h18v12H3zM5 6h14v8H5V6z"
        fill={iconColor}
      />
      <path d="M1 20h22v-2H1v2z" fill={iconColor} />
    </IconBase>
  );
};

export default Desktop24;
