import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronUp24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M22 17.95l-9.973-9.5L2 18v-2.45L12.027 6 22 15.5v2.45z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronUp24;
