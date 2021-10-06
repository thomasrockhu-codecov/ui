import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Refresh16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M7.733 2.006L5.727 0h2.828l3.001 3.001L8.557 6H5.73l1.99-1.99A4 4 0 1012 8h2a6 6 0 11-6.267-5.994z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Refresh16;
