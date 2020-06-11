import React, { ReactNode } from 'react';
import { ColorFn } from '../../../common/Types/sharedTypes';
import {Density} from "../shared/shared.types";

type HtmlProps = {} & React.HTMLAttributes<HTMLDivElement>;

type Props = {
  hideSeparator?: boolean;
  expandableContent?: ReactNode;
  expanded?: boolean;
  hoverHighlight?: boolean;
  separatorColor?: ColorFn;
  density?: Density;
} & HtmlProps;

export type RowComponent = React.FC<Props>;
