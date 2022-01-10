import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Faq32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path
        d="M12.212 13.386h1.834l.042-.21c.109-.53.508-.862 1.069-1.33l.051-.042c1.246-1.064 1.708-1.638 1.708-2.73 0-1.638-1.33-2.674-3.276-2.674-1.848 0-3.276.994-3.556 2.898h2.114c.182-.588.616-1.078 1.4-1.078.756 0 1.134.42 1.134.952 0 .558-.42.9-.972 1.347a33.81 33.81 0 00-.134.109c-1.414 1.15-1.414 1.588-1.414 2.52v.238zM14.256 14.366h-2.198v2.226h2.198v-2.226z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 8h5v22l-7.5-5H7v-3.333L2 25V3h23v5zm0 12H9.5l-.5.333V23h14.106L28 26.263V10h-3v10zM8.894 18L4 21.263V5h19v13H8.894z"
        fill="currentColor"
      />
    </IconBase>
  );
};

Faq32.displayName = 'Icon.Faq';

export default Faq32;
