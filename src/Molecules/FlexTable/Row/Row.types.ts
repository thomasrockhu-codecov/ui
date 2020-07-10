import React, { ReactNode } from 'react';
import {
  ExpandItems,
  ExpandItemComponent,
  ExpandItemsComponent,
} from './components/ExpandItems/ExpandItems.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { MediaRelatedProps } from '../shared/shared.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

interface Expand {
  /**
   * Sets expand state
   * @default false
   */
  expanded?: boolean;
  /**
   * Components to be rendered in the expandable area. Is rendered below `expandItems`
   */
  expandChildren?: ReactNode;
  /**
   * Array to be rendered in the expandable area. Maps itself by key/value pairs.
   */
  expandItems?: ExpandItems;
}

interface IncludeExpand extends Expand {
  includeExpand?: true;
  onExpandToggle?: (expanded: boolean) => void;
}

interface ExcludeExpand extends Expand {
  includeExpand?: false;
  onExpandToggle?: undefined;
}

export type ExpandProps = IncludeExpand | ExcludeExpand;
export type ExpandAreaProps = Expand;

type Props = {
  /**
   * Hide row bottom border
   * @default false
   */
  hideSeparator?: boolean;
  /**
   * Highlight on mouse hover
   * @default true
   */
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
  /**
   * Decides if it should render empty `Header` or chevron when table is expandable
   * @default true
   */
  isContent?: boolean;
} & ExpandProps &
  MediaRelatedProps<Pick<Expand, 'expandItems' | 'expandChildren'>> &
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
