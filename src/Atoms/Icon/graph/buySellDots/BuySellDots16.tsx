import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const BuySellDots16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M6 3.828l2 2V3L5 0 2 3v2.828l2-2v6.167h2V3.828zM10 12.167l-2-2v2.828l3 3 3-3v-2.828l-2 2V6h-2v6.167z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default BuySellDots16;
