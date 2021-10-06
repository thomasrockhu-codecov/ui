import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExternalLink24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M20.003 16.426V5.414L3.41 22.007l-1.414-1.414L18.589 4H6.973l2-2h13.03v12.426l-2 2z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default ExternalLink24;
