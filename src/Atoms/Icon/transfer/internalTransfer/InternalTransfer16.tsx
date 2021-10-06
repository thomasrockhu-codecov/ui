import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const InternalTransfer16: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M1 4.5h12v2.172l-1-1V8.5l1.995 1.995.996-.995H15v-.009l1-1V5.663l-1 1V2.5H1v2z"
        fill={iconColor}
      />
      <path d="M9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={iconColor} />
      <path
        d="M3 11.495h12v2H1V9.334l-1 1V7.505l1-1v-.01h.009l.996-.995L4 7.495v2.829l-1-1v2.171z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default InternalTransfer16;
