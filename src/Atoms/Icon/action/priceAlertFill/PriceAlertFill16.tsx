import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PriceAlert16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M9 1.083c2.838.476 5 2.944 5 5.917v3.586l1 1V14h-5a2 2 0 11-4 0H1v-2.414l1-1V7a6.002 6.002 0 015-5.917V0h2v1.083z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default PriceAlert16;
