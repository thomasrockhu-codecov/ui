import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M1 9.918V7.09l15 15 15-15v2.828l-15 15-15-15z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronDown32;
