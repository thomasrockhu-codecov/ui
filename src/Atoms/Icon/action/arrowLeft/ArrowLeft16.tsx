import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ArrowLeft16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path d="M4.828 7l4-4H6L1 8l5 5h2.828l-4-4h10.167V7H4.828z" fill={iconColor} />
    </IconBase>
  );
};

export default ArrowLeft16;
