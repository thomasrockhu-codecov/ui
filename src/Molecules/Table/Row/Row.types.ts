import React, { ReactNode } from 'react';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

type Props = {
  hideBorder?: boolean;
  expandableContent?: ReactNode;
  expanded?: boolean;
} & HtmlProps;

export type RowComponent = React.FC<Props>;
