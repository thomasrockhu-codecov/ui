import React from 'react';
import { RowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { constants } from './shared';
import { CellComponent } from './Cell/Cell.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
} & HtmlProps;

export type FlexTableComponents = {
  Header: HeaderComponent;
  Row: RowComponent;
  Cell: CellComponent;
  CONSTANTS: typeof constants;
};
