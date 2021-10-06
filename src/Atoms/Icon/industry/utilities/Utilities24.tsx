import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Utilities24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M6 8a6 6 0 118.57 5.423l-.57.271V18h2v-3.07a8 8 0 10-8 0V18h2v-4.306l-.57-.27A6 6 0 016 8z"
        fill={iconColor}
      />
      <path
        d="M12 4a4 4 0 014 4h-2a2 2 0 00-2-2V4zM16 21v-2H8v2h8zM16 24v-2H8v2h8z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Utilities24;
