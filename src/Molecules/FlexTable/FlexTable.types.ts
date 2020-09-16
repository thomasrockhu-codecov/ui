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

//
// export interface Props extends Partial<FlexTableProviderProps>, Omit<HtmlProps, 'id' | 'title'> {
//   className?: string;
// }
// interface PropsWithTitle extends Props {
//   title: ReactNode;
//   id: string;
// }
//
// interface PropsTwo extends Partial<FlexTableProviderProps>, Omit<HtmlProps, 'id' | 'title'> {
//   className?: string;
// }
//
// interface PropsWithTitle extends PropsTwo {
//   id: string;
//   title: ReactNode;
// }
//
// interface PropsWithoutTitle extends PropsTwo {
//   id: undefined; // TODO add so that id can be added without title if wanted
//   title: undefined;
// }
//
// type MyProps = PropsWithoutTitle | PropsWithTitle;
//
// export type FlexTableComponent = React.FC<MyProps>;

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
