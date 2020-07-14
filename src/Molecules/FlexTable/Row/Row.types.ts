import React, { ReactNode } from 'react';
import {
  ExpandItems,
  ExpandItemComponent,
  ExpandItemsComponent,
} from './components/ExpandItems/ExpandItems.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { MediaRelatedProps } from '../shared/shared.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type ExpandAreaProps = {
  expanded?: boolean;
  expandChildren?: ReactNode;
  expandItems?: ExpandItems;
  onExpandToggle?: (expanded: boolean) => void | undefined;
};

type Props = {
  hideSeparator?: boolean;
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
  isContent?: boolean;
} & ExpandAreaProps &
  MediaRelatedProps<Pick<ExpandAreaProps, 'expandItems' | 'expandChildren'>> &
  HtmlProps;

export type RowComponents = {
  ExpandItem: ExpandItemComponent;
  ExpandItems: ExpandItemsComponent;
};

export type RowComponent = React.FC<Props>;

type HeaderProps = {
  hideSeparator?: boolean;
  isContent?: boolean;
  separatorColor?: ColorFn;
} & HtmlProps;

export type HeaderRowComponent = React.FC<HeaderProps>;

type FooterProps = HeaderProps;

export type FooterRowComponent = React.FC<FooterProps>;
