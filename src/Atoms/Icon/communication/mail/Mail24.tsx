import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Mail24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 3H2v4.49l10 7.777 10-7.778V3zM4 6.51V5h16v1.51l-8 6.223-8-6.222z"
        fill={iconColor}
      />
      <path d="M2 21V10.49l2 1.555V19h16v-6.955l2-1.556V21H2z" fill={iconColor} />
    </IconBase>
  );
};

export default Mail24;
