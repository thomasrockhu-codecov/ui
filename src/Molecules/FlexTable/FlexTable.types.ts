import React, { ReactElement } from 'react';
import { FooterRowComponent, HeaderRowComponent, RowComponent } from './Row/Row.types';
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

interface Title {
  id?: string;
  /**
   * Will render a title above the table.
   * Note, will require id for
   */
  title?: ReactElement | string;
}

interface PropsWithTitle extends Title {
  id: string;
  title: ReactElement | string;
}

interface PropsWithoutTitle extends Title {
  id?: string;
  title?: never;
}

type TitleProps = PropsWithTitle | PropsWithoutTitle;

interface PersistSortingOrder {
  id?: string;
  persistSortingOrder?: boolean;
}

interface PropsWithPersistSortingOrder extends PersistSortingOrder {
  id: string;
  persistSortingOrder: boolean;
}

interface PropsWithoutPersistSortingOrder extends PersistSortingOrder {
  id?: string;
  persistSortingOrder?: never;
}

type PersistSortingOrderProps = PropsWithPersistSortingOrder | PropsWithoutPersistSortingOrder;

export type Props = {
  className?: string;
} & TitleProps &
  PersistSortingOrderProps &
  Partial<FlexTableProviderProps> &
  Omit<HtmlProps, 'title' | 'id'>;

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

export { Props as CellProps } from './Cell/Cell.types';
export { Props as FooterProps } from './Footer/Footer.types';
export { Density, FontSize, MediaRelatedProps, FlexPropsType } from './shared/shared.types';
export { OnSort } from './Header/Header.types';
export { SortOrder } from './Header/HeaderContent/HeaderContent.types';
