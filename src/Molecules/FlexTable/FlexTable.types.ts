import React from 'react';
import { RowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { constants } from './shared';
import { CellComponent } from './Cell/Cell.types';
import { Density } from './shared/shared.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
  density?: Density;
} & HtmlProps;

export type FlexTableComponents = {
  Header: HeaderComponent;
  HeaderRow: RowComponent;
  Row: RowComponent;
  Cell: CellComponent;
  CONSTANTS: typeof constants;
};
