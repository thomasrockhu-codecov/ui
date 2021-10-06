import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowUp16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M8.998 4.83l4 4V6.003l-5-5-5 5v2.829l4-4v10.166h2V4.832z" fill={iconColor} />
    </IconBase>
  );
};

export default ArrowUp16;
