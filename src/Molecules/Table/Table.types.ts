import React from 'react';
import { RowComponent } from './Row/Row.types';

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

export type Props = {
  className?: string;
} & HtmlProps;

export type TableComponents = {
  Row: RowComponent;
};
