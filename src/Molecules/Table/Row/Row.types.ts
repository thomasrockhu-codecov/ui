import React from 'react';

export type Size = 's' | 'm' | 'l';

type Props = {
  size?: Size;
  hideBorder?: boolean;
};

export type RowComponent = React.FC<Props>;
