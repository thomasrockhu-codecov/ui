import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Compare16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.342 3.727L5.06.796.137 9.245l1.728 1.007 2.94-5.048.284.648-4.95 8.388 1.723 1.016 4.215-7.144 2.275 5.198 1.634-3.12 1.282 2.93 4.508-7.083-1.687-1.074-2.493 3.917-.42-.962L14.818.964 13.047.036 10.148 5.57 8.065.808l-1.723 2.92zm.989 2.26L8.513 8.69l.446-.85-1.16-2.648-.468.795z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Compare16;
