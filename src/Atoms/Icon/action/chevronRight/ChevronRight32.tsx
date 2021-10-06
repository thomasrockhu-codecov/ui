import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M9.914 31.004H7.086l15-15-15-15h2.828l15 15-15 15z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronRight32;
