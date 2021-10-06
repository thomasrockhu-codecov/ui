import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M13.42 0l-8 8 8 8h-2.828l-8-8 8-8h2.828z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronLeft16;
