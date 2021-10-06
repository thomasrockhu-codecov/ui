import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ExternalLink8: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M4.586 2H1l2-2h5v5L6 7V3.414L1.414 8 0 6.586 4.586 2z" fill={iconColor} />
    </IconBase>
  );
};

export default ExternalLink8;
