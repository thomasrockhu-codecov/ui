import React from 'react';
import { useTheme } from 'styled-components';

import { IconProps } from '../../Icon.types';
import { getColor } from '../../utils';

const Commodity24: React.FC<IconProps> = ({ color }) => {
  const theme = useTheme();

  const iconColor = getColor(theme, theme.color.icon, color);

  return (
    <svg width={24} height={24} fill="none">
      <path d="M12 17a2 2 0 01-2-2H8a4 4 0 004 4v-2z" fill={iconColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3l.7-.714.002.002.005.005.018.017a11.284 11.284 0 01.295.3 39.441 39.441 0 013.286 3.89c.897 1.22 1.811 2.632 2.504 4.098C19.5 12.054 20 13.629 20 15.16c0 4.352-3.604 7.84-8 7.84s-8-3.488-8-7.84c0-1.36.515-2.851 1.194-4.25.689-1.42 1.597-2.848 2.49-4.11a51.05 51.05 0 013.494-4.382l.062-.069.017-.018.007-.007L12 3zm-.326 1.903c.129-.155.25-.297.36-.426l.318.349a37.43 37.43 0 012.343 2.86c.852 1.158 1.688 2.456 2.307 3.766.624 1.32.998 2.59.998 3.708 0 3.204-2.664 5.84-6 5.84s-6-2.636-6-5.84c0-.908.36-2.072.993-3.378.624-1.285 1.466-2.614 2.323-3.826a49.02 49.02 0 012.358-3.053z"
        fill={iconColor}
      />
      <path d="M11.264 2.324l.698-.761.738.723L12 3l-.736-.676z" fill={iconColor} />
    </svg>
  );
};

export default Commodity24;
