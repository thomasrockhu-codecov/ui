import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Export24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M11 4.828l-3 3V5l4-4 4 4v2.828l-3-3v8.829h-2V4.828z" fill={iconColor} />
      <path
        d="M20 20v-9h2v9a3 3 0 01-3 3H5a3 3 0 01-3-3v-9h2v9a1 1 0 001 1h14a1 1 0 001-1z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Export24;
