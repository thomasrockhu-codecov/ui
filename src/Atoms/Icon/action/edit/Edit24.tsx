import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Edit24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.018 1.028c.683-.098 1.448.053 2.013.619l2.122 2.12c.565.566.716 1.331.618 2.014-.097.681-.443 1.347-.972 1.876L6.657 22.799H1v-5.657L16.142 2c.529-.529 1.195-.875 1.877-.972zm.283 1.98c-.213.03-.492.154-.745.406L16.142 4.83l2.829 2.828 1.414-1.414c.252-.253.376-.531.406-.745.03-.214-.032-.296-.053-.316l-2.121-2.121c-.02-.02-.102-.084-.316-.053zm-.745 6.063l-2.828-2.828L3 17.97v2.828h2.828L17.556 9.071z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Edit24;
