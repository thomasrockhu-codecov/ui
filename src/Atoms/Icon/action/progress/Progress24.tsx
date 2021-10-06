import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Progress24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M20.453 19.04l-1.421-1.422A8.958 8.958 0 0020.945 13h2.01a10.95 10.95 0 01-2.502 6.04zM19.04 20.453l-1.422-1.421A8.958 8.958 0 0113 20.945v2.01a10.95 10.95 0 006.04-2.502zM4.968 17.618l-1.421 1.421A10.95 10.95 0 011.045 13h2.01a8.958 8.958 0 001.913 4.618zM19.032 6.382l1.421-1.421A10.95 10.95 0 0122.955 11h-2.01a8.958 8.958 0 00-1.913-4.618zM6.382 19.032A8.957 8.957 0 0011 20.945v2.01a10.95 10.95 0 01-6.04-2.502l1.422-1.421zM17.618 4.968A8.957 8.957 0 0013 3.055v-2.01a10.95 10.95 0 016.04 2.502l-1.422 1.421z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Progress24;
