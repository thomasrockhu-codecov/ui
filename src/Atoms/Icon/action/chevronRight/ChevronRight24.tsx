import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M6.05 22l9.5-9.973L6 2h2.45L18 12.027 8.5 22H6.05z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronRight24;
