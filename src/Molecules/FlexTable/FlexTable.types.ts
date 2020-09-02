import React, { ReactNode } from 'react';
import { RowComponent, FooterRowComponent, HeaderRowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { FooterComponent } from './Footer/Footer.types';
import { constants } from './shared';
import { CellComponent, ExpandCellComponent } from './Cell/Cell.types';
import { Props as FlexTableProviderProps } from './shared/FlexTableProvider/FlexTableProvider.types';
import { CellInlineContainerComponent } from './shared/CellInlineContainer/CellInlineContainer.types';
import {
  ExpandItemComponent,
  ExpandItemsComponent,
} from './Row/components/ExpandItems/ExpandItems.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
  /**
   * Will render a title above the table
   */
  title?: ReactNode;
} & Partial<FlexTableProviderProps> &
  Omit<HtmlProps, 'title'>;

export type FlexTableComponent = React.FC<Props>;

export type FlexTableComponents = {
  CONSTANTS: typeof constants;
  Cell: CellComponent;
  CellInlineContainer: CellInlineContainerComponent;
  ExpandCell: ExpandCellComponent;
  ExpandItem: ExpandItemComponent;
  ExpandItems: ExpandItemsComponent;
  Footer: FooterComponent;
  FooterRow: FooterRowComponent;
  Header: HeaderComponent;
  HeaderRow: HeaderRowComponent;
  Row: RowComponent;
};
