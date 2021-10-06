import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M2 6.051l9.973 9.5L22 6v2.45L11.973 18 2 8.5V6.051z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronDown24;
