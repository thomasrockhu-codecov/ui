import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronDown16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M0 2.58l8 8 8-8v2.828l-8 8-8-8V2.58z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronDown16;
