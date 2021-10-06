import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const FlagFill16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M14.863 0l-2.571 4.5L14.863 9H3.14v7h-2V0h13.723z" fill={iconColor} />
    </IconBase>
  );
};

export default FlagFill16;
