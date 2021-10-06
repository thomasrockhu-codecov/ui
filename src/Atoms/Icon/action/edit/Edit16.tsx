import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Edit16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.693 2.48L13.52 1.31a3 3 0 00-4.242 0L.4 10.187v5.415h5.414l8.879-8.88a3 3 0 000-4.242zm-2.586.243l1.172 1.171a1 1 0 010 1.415l-.707.707L9.986 3.43l.707-.707a1 1 0 011.414 0zM8.572 4.844L2.4 11.016v2.586h2.586l6.171-6.172-2.585-2.586z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Edit16;
