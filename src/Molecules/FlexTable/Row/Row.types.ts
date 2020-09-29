import React, { ReactNode } from 'react';
import {
  ExpandItems,
  ExpandItemComponent,
  ExpandItemsComponent,
} from './components/ExpandItems/ExpandItems.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { MediaRelatedProps } from '../shared/shared.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

interface ExpandArea {
  /**
   * Sets expand state, makes expansion controlled
   */
  expanded?: boolean;
  /**
   * If the row starts out expanded, is used when expanded is not supplied, i.e. uncontrolled expansion
   * @default false
   */
  initiallyExpanded?: boolean;
  /**
   * Components to be rendered in the expandable area. Is rendered below `expandItems`
   */
  expandChildren?: ReactNode;
  /**
   * Array to be rendered in the expandable area. Maps itself by key/value pairs.
   */
  expandItems?: ExpandItems;
  onExpandToggle?: (newExpanded: boolean) => void | undefined;
}

interface ControlledExpand extends ExpandArea {
  expanded: boolean;
  // You're not allowed to supply initiallyExpanded if expanded has been defined
  initiallyExpanded?: undefined;
}

interface UncontrolledExpand extends ExpandArea {
  expanded?: undefined;
  initiallyExpanded?: boolean;
}

export type ExpandRowProps = ExpandAreaProps &
  MediaRelatedProps<Pick<ExpandAreaProps, 'expandItems' | 'expandChildren'>> & {
    separatorColor?: ColorFn;
  } & HtmlProps;

export type ExpandRowComponent = React.FC<ExpandRowProps>;

export type ExpandAreaProps = UncontrolledExpand | ControlledExpand;

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
} & HtmlProps &
  ExpandRowProps;

export type RowComponents = {
  ExpandItem: ExpandItemComponent;
  ExpandItems: ExpandItemsComponent;
  ExpandRow: ExpandRowComponent;
};

export type RowComponent = React.FC<Props> & RowComponents;

type HeaderProps = {
  /**
   * Hide row bottom border
   * @default false
   */
  hideSeparator?: boolean;
  /**
   * Decides if it should render empty `Header` or chevron when table is expandable
   * @default true
   */
  isContent?: boolean;
  separatorColor?: ColorFn;
  /**
   *  When the header is sticky, use this number as value for css-top property.
   * @default 0
   */
  stickyOffsetTop?: number;
} & HtmlProps;

export type HeaderRowComponent = React.FC<HeaderProps>;

type FooterProps = HeaderProps;

export type FooterRowComponent = React.FC<FooterProps>;
