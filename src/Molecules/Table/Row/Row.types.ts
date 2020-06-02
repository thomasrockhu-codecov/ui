import React, { ReactNode } from 'react';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Density = 's' | 'm' | 'l';

type Props = {
  density?: Density;
  hideBorder?: boolean;
  expandableContent?: ReactNode;
  expanded?: boolean;
} & HtmlProps;

export type RowComponent = React.FC<Props>;
