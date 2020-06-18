import React, { ReactNode } from 'react';
import { ColorFn } from '../../../common/Types/sharedTypes';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type ExpandItemProps = {
  label: ReactNode;
  value: ReactNode;
};

export type ExpandItems = Array<ExpandItemProps>;
export type ExpandItemComponent = React.FC<{ item: ExpandItemProps }>;

type Props = {
  hideSeparator?: boolean;
  expandChildren?: ReactNode;
  expandItems?: ExpandItems;
  expandable?: boolean;
  expanded?: boolean;
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
} & HtmlProps;

export type ExpandItemsComponent = React.FC<{ items: ExpandItems }>;

export type RowComponents = {
  ExpandItems: ExpandItemsComponent;
  ExpandItemMobile: ExpandItemComponent;
  ExpandItemDesktop: ExpandItemComponent;
};

export type RowComponent = React.FC<Props>;
