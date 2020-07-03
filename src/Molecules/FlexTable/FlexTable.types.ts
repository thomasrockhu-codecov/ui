import React, { ReactNode } from 'react';
import { RowComponent, FooterRowComponent, HeaderRowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { FooterComponent } from './Footer/Footer.types';
import { constants } from './shared';
import { CellComponent, ExpandCellComponent } from './Cell/Cell.types';
import { Props as FlexTableProviderProps } from './shared/FlexTableProvider/FlexTableProvider.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
  title?: ReactNode;
} & Partial<FlexTableProviderProps> &
  HtmlProps;

export type FlexTableComponent = React.FC<Props>;

export type FlexTableComponents = {
  Header: HeaderComponent;
  HeaderRow: HeaderRowComponent;
  Footer: FooterComponent;
  FooterRow: FooterRowComponent;
  Row: RowComponent;
  Cell: CellComponent;
  ExpandCell: ExpandCellComponent;
  CONSTANTS: typeof constants;
};
