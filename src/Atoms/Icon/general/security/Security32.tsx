import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Security32: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={32} height={32}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.001.79l1.846 1.258c3.067 2.04 6.658 3.42 9.952 2.747l1.191-.244L29 5.767c.109 15.43-7.307 21.992-10.955 24.264l-.008.004-.246.15-.24.141-.224.127-.209.113-.19.099-.175.087-.22.105-.536.243-.664-.308-.165-.08-.18-.092-.197-.104-.213-.118-.23-.131-.243-.145-.257-.16a16.664 16.664 0 01-.134-.086l-.008-.005-.268-.177C9.64 27.14 2.897 20.484 3 5.767l.009-1.216 1.191.244c3.226.659 6.74-.68 9.78-2.634l2.02-1.37zM16 3.21l-.915.62-.01.006C12.202 5.685 8.612 7.23 5.008 6.927c.244 13.152 6.325 18.94 9.542 21.105l.252.167.11.07.232.144.213.127.2.115.184.101.168.09.091.046.017-.009.163-.084.179-.097.194-.11.21-.123.227-.139c3.067-1.91 9.745-7.607 10.002-21.402-3.677.314-7.344-1.279-10.258-3.218l-.009-.006L16 3.21z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Security32;
