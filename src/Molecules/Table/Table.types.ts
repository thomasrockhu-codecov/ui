import React from 'react';
import { RowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { constants } from './shared';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
} & HtmlProps;

export type TableComponents = {
  Header: HeaderComponent;
  Row: RowComponent;
  CONSTANTS: typeof constants;
};
