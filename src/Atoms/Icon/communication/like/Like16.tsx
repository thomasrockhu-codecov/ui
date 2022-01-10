import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Like16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4.58579L4.58579 5H2C0.895431 5 0 5.89543 0 7V14H4C4.70214 14 5.31977 13.6382 5.67661 13.0908L6.58579 14H11.3401C12.7838 14 14.0227 12.9718 14.2888 11.5529L15.0388 7.55287C15.3849 5.70662 13.9686 4 12.0901 4H10C10 1.79086 8.20914 0 6 0H5V4.58579ZM7 2.26756V5.41421L6 6.41421V10.5858L7.41421 12H11.3401C11.8214 12 12.2343 11.6573 12.323 11.1843L13.073 7.18429C13.1884 6.56887 12.7163 6 12.0901 6H8V4C8 3.25972 7.5978 2.61337 7 2.26756ZM2 7H4V12H2V7Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Like16.displayName = 'Icon.Like';

export default Like16;
