import React, { ReactNode } from 'react';
import { ColorFn } from '../../../common/Types/sharedTypes';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

type Props = {
  hideSeparator?: boolean;
  expandableContent?: ReactNode;
  expanded?: boolean;
  separatorColor?: ColorFn;
} & HtmlProps;

export type RowComponent = React.FC<Props>;
