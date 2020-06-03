import React from 'react';
import { RowComponent } from './Row/Row.types';
import { HeaderComponent } from './Header/Header.types';
import { RowGroupComponent } from './RowGroup/RowGroup.types';
import { constants } from './shared';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
} & HtmlProps;

export type TableComponents = {
  Header: HeaderComponent;
  RowGroup: RowGroupComponent;
  Row: RowComponent;
  CONSTANTS: typeof constants;
};
