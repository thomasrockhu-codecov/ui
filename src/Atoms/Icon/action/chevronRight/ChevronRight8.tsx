import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ChevronRight8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={9}>
      <path d="M.586 8.014l4-4-4-4h2.828l4 4-4 4H.586z" fill={iconColor} />
    </IconBase>
  );
};

export default ChevronRight8;
