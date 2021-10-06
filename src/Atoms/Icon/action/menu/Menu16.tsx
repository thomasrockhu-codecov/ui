import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Menu16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M0 1h16v2H0V1zM0 7h16v2H0V7zM16 13H0v2h16v-2z" fill={iconColor} />
    </IconBase>
  );
};

export default Menu16;
