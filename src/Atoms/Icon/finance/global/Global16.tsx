import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Global16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm-2.71-2.714l.031.084A6.008 6.008 0 012.083 9h2.441c.08 1.63.35 3.12.766 4.286zM6.527 9c.077 1.434.317 2.69.647 3.613.204.571.423.962.617 1.192a.75.75 0 00.209.189.75.75 0 00.21-.19c.193-.229.412-.62.616-1.19.33-.925.57-2.18.647-3.614H6.527zm2.946-2H6.527c.077-1.435.317-2.69.647-3.613.204-.571.423-.962.617-1.192A.749.749 0 018 2.006a.749.749 0 01.21.19c.193.229.412.62.616 1.19.33.924.57 2.18.647 3.614zm2.003 2c-.08 1.63-.35 3.12-.767 4.286l-.03.084A6.008 6.008 0 0013.917 9h-2.441zm2.441-2h-2.441c-.08-1.63-.35-3.12-.767-4.286a7.54 7.54 0 00-.03-.084A6.007 6.007 0 0113.917 7zM4.524 7H2.083a6.007 6.007 0 013.238-4.37l-.03.084C4.873 3.88 4.602 5.37 4.523 7z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Global16;
