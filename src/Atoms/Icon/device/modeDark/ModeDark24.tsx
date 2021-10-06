import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ModeDark24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.401.873l-.68 1.591A8.968 8.968 0 0011 6a9 9 0 0010.08 8.936l1.719-.205-.68 1.591A11.003 11.003 0 0112 23C5.925 23 1 18.075 1 12 1 6.37 5.228 1.73 10.683 1.078L12.4.873zM9.307 3.41A9.005 9.005 0 003 12a9 9 0 0016.492 4.988C13.652 16.723 9 11.905 9 6c0-.892.106-1.76.307-2.59z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default ModeDark24;
