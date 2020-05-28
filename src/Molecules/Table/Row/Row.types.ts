import React from 'react';

export type Size = 's' | 'm' | 'l';

type Props = {
  size?: Size;
  hideBorder?: boolean;
  className?: string;
};

type Expandable = {
  expanded?: boolean;
  expandable: true;
};

type NonExpandable = {
  expanded?: false;
  expandable?: false;
};

type ExpandableProps = Expandable | NonExpandable;

export type RowComponent = React.FC<Props & ExpandableProps>;
