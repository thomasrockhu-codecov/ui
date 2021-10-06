import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Filter24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M1 4h22v2H1V4zM4 11h16v2H4v-2zM17 18H7v2h10v-2z" fill={iconColor} />
    </IconBase>
  );
};

export default Filter24;
