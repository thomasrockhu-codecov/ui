import React, { ReactNode } from 'react';
import { ColorFn } from '../../../common/Types/sharedTypes';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type ExpandItem = {
  label: string;
  value: string;
};

export type ExpandItems = Array<ExpandItem>;

type Props = {
  hideSeparator?: boolean;
  expandChildren?: ReactNode;
  expandItems?: ExpandItems;
  expanded?: boolean;
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
} & HtmlProps;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;
export type RowComponent = React.FC<Props>;
