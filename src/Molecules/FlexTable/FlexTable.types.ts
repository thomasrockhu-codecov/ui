import React from 'react';
import { RowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { constants } from './shared';
import { CellComponent, ExpandCellComponent } from './Cell/Cell.types';
import { Density } from './shared/shared.types';
import { ActionHeaderComponent } from './Header/ActionHeader.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
  density?: Density;
} & HtmlProps;

export type FlexTableComponents = {
  Header: HeaderComponent;
  ActionHeader: ActionHeaderComponent;
  HeaderRow: RowComponent;
  Row: RowComponent;
  Cell: CellComponent;
  ExpandCell: ExpandCellComponent;
  CONSTANTS: typeof constants;
};
