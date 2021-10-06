import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M0 .59l4 4 4-4v2.828l-4 4-4-4V.59z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronDown8;
