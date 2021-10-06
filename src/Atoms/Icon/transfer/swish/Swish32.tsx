import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Swish32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M7.381 27.032l3.471-4.443c-.258-.17-.511-.351-.759-.545-4.874-3.808-5.738-10.846-1.93-15.72a11.178 11.178 0 018.617-4.303 13.983 13.983 0 00-11.812 5.36c-4.76 6.093-3.68 14.89 2.413 19.65zm0 0l.024-.03M24.619 4.968l-.024.03m.024-.03l-3.471 4.443c.258.17.511.351.759.545 4.874 3.808 5.738 10.846 1.93 15.72a11.178 11.178 0 01-8.617 4.303 13.984 13.984 0 0011.812-5.36c4.76-6.093 3.68-14.89-2.413-19.65z"
        stroke={iconColor}
        fill="transparent"
        strokeWidth={2}
      />
    </IconBase>
  );
};

export default Swish32;
