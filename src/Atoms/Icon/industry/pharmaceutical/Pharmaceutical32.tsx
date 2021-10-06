import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Pharmaceutical32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M15 19v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1a3 3 0 00-3 3v2a3 3 0 003 3v2.586l-2.828 2.828A4 4 0 006 17.243V27a4 4 0 004 4h12a4 4 0 004-4v-9.757a4 4 0 00-1.172-2.829L22 11.586V9a3 3 0 003-3V4a3 3 0 00-3-3H10zm10 8h-8v3.414l-3.414 3.414A2 2 0 008 17.243V27a2 2 0 002 2h12a2 2 0 002-2v-9.757a2 2 0 00-.586-1.415L20 12.414V9zM10 7h2V3h-2a1 1 0 00-1 1v2a1 1 0 001 1zm8 0h-4V3h4v4zm2 0h2a1 1 0 001-1V4a1 1 0 00-1-1h-2v4z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Pharmaceutical32;
