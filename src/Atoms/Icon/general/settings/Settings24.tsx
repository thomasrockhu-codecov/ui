import React from 'react';
import { useTheme } from 'styled-components';

import { IconBase, getColor } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Settings24: React.FC<IconProps> = (props) => {
  const theme = useTheme();
  const iconColor = getColor(theme, theme.color.icon, props.color);

  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.444 3.134A3.992 3.992 0 018.5 5.938a3.992 3.992 0 01-3.4.283 8.99 8.99 0 00-1.556 2.692A3.992 3.992 0 015 12a3.992 3.992 0 01-1.457 3.087c.361.99.892 1.899 1.557 2.692a3.992 3.992 0 013.4.283 3.992 3.992 0 011.944 2.804 9.069 9.069 0 003.11 0 3.992 3.992 0 011.945-2.804 3.992 3.992 0 013.4-.283 8.988 8.988 0 001.557-2.692A3.992 3.992 0 0119 12c0-1.244.568-2.354 1.456-3.087A8.989 8.989 0 0018.9 6.22a3.992 3.992 0 01-3.4-.283 3.992 3.992 0 01-1.945-2.804 9.064 9.064 0 00-3.11 0zM9.246 1.348A11.018 11.018 0 0112 1c.949 0 1.871.12 2.752.347l.792.204-.043.817a2 2 0 003.088 1.784l.685-.444.572.582a10.989 10.989 0 012.756 4.77l.218.786-.727.37a2 2 0 000 3.567l.727.371-.218.787a10.989 10.989 0 01-2.756 4.769l-.572.582-.685-.444a2 2 0 00-3.088 1.784l.043.816-.792.204C13.872 22.88 12.95 23 12 23c-.95 0-1.873-.12-2.754-.348l-.791-.204.042-.816a2 2 0 00-3.087-1.784l-.685.443-.572-.582a10.99 10.99 0 01-2.756-4.768l-.217-.787.727-.37a2 2 0 000-3.567l-.727-.371.217-.787A10.99 10.99 0 014.153 4.29l.572-.581.685.443a2 2 0 003.087-1.784l-.042-.816.791-.204z"
        fill={iconColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        fill={iconColor}
      />
    </IconBase>
  );
};

export default Settings24;
