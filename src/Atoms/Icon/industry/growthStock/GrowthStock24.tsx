import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const GrowthStock24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M14.149 20h-2.31l7.815-13.534-3.463.928 1.414-2.45 4.83-1.294 1.294 4.83-1.415 2.45-.928-3.465L14.15 20zM2.613 20H.28l3.403-5.664h2.333L2.613 20zM5.878 20l5.804-9.664h2.334L8.21 20H5.878z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default GrowthStock24;
