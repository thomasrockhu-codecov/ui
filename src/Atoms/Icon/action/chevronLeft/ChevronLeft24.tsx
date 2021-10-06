import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M17.95 2l-9.5 9.973L18 22h-2.45L6 11.973 15.5 2h2.45z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronLeft24;
