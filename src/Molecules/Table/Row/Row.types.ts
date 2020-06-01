import React, { ReactNode } from 'react';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Size = 's' | 'm' | 'l';

type Props = {
  size?: Size;
  hideBorder?: boolean;
  expandableContent?: ReactNode;
  expanded?: boolean;
} & HtmlProps;

export type RowComponent = React.FC<Props>;
