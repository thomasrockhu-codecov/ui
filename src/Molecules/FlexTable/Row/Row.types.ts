import React, { ReactNode } from 'react';
import {
  ExpandItems,
  ExpandItemComponent,
  ExpandItemsComponent,
} from './ExpandItems/ExpandItems.types';
import { ColorFn } from '../../../common/Types/sharedTypes';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

type Props = {
  hideSeparator?: boolean;
  expandChildren?: ReactNode;
  expandItems?: ExpandItems;
  expandable?: boolean;
  expanded?: boolean;
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
} & HtmlProps;

export type RowComponents = {
  ExpandItem: ExpandItemComponent;
  ExpandItems: ExpandItemsComponent;
};

export type RowComponent = React.FC<Props>;

type HeaderProps = Omit<Props, 'expandChildren' | 'expandItems' | 'expanded' | 'hoverHighlight'>;

export type HeaderRowComponent = React.FC<HeaderProps>;

type FooterProps = HeaderProps;

export type FooterRowComponent = React.FC<FooterProps>;
