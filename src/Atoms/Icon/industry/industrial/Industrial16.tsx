import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Industrial16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M12.055 3C13.32 3 14.63 2.58 16 1.668v2.32C14.716 4.651 13.399 5 12.055 5 10.32 5 8.63 4.42 6.999 3.332 5.631 2.42 4.32 2 3.055 2 2.066 2 1.05 2.256 0 2.803V.605C1 .207 2.02 0 3.055 0c1.734 0 3.423.58 5.053 1.668C9.478 2.58 10.79 3 12.055 3zM2 16V5H0v11h2zM15 8.131V16h-2v-4.132l-4.5 3v-2.996l-4.476 2.994L4.014 13H4V5h2l.006 6.134 4.492-3.006.001 3.004 4.501-3z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Industrial16;
