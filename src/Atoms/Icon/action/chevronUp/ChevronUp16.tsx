import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronUp16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M16 13.42l-8-8-8 8v-2.828l8-8 8 8v2.828z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronUp16;
