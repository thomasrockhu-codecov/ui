import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Grid24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 23v-6H1v-2h6V9H1V7h6V1h2v6h6V1h2v6h6v2h-6v6h6v2h-6v6h-2v-6H9v6H7zm8-8V9H9v6h6z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Grid24;
