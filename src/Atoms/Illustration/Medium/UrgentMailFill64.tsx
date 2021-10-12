import React from 'react';
import { useTheme } from 'styled-components';

import { IllustrationBase, getColor } from '../IllustrationBase';
import { IllustrationProps } from '../IllustrationBase.types';

const UrgentMailFill64: React.FC<IllustrationProps> = (props) => {
  const theme = useTheme();
  const secondaryIllustrationColor = getColor(theme, theme.color.negative, props.secondaryColor);

  return (
    <IllustrationBase {...props} width={64} height={64}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18H40V20H14.7205L32 34.6876L41.5609 26.5608L42.9797 27.9797L38.3898 31.8812L51 42.81V30H53V46H11V18ZM13 42.81L25.6102 31.8812L13 21.1624V42.81ZM27.152 33.1916L14.6807 44H49.3193L36.8481 33.1916L32 37.3124L27.152 33.1916Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.4142 12H46.5858L42 16.5858V23.4142L46.5858 28H53.4142L58 23.4142V16.5858L53.4142 12ZM49 16V21H51V16H49ZM49 24V22H51V24H49Z"
        fill={secondaryIllustrationColor}
      />
    </IllustrationBase>
  );
};

export default UrgentMailFill64;
