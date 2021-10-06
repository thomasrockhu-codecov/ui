import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronLeft8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={9}>
      <path d="M7.414.014l-4 4 4 4H4.586l-4-4 4-4h2.828z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronLeft8;
