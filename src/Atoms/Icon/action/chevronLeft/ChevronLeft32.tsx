import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M22.086 1.004h2.828l-15 15 15 15h-2.828l-15-15 15-15z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronLeft32;
