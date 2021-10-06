import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Cross24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12.01 13.425l8.486 8.485 1.414-1.414-8.486-8.486 8.465-8.506-1.414-1.414-8.465 8.506-8.485-8.485-1.414 1.414 8.485 8.485-8.506 8.465 1.414 1.414 8.506-8.464z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Cross24;
