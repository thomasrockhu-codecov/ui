import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronUp8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M8 7.418l-4-4-4 4V4.59l4-4 4 4v2.828z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronUp8;
