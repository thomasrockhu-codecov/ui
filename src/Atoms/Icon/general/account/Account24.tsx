import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Account24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path d="M19 13v2h-2v-2h2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1a3 3 0 00-3 3v16a3 3 0 003 3h19V5h-4V1H4zm0 6c-.35 0-.687-.06-1-.17V20a1 1 0 001 1h17V7H4zM3 4a1 1 0 001 1h13V3H4a1 1 0 00-1 1z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Account24;
