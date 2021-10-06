import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Menu24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M1 4h22v2H1V4zM1 11h22v2H1v-2zM23 18H1v2h22v-2z" fill={iconColor} />
    </IconBase>
  );
};

export default Menu24;
