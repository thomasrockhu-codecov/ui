import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FactSheet16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M15 0H1v16h2V2h10v14h2V0z" fill={iconColor} />
      <path d="M8 6h3V4H8v2zM5 12v-2h6v2H5zM11 14v2H5v-2h6z" fill={iconColor} />
    </IconBase>
  );
};

export default FactSheet16;
