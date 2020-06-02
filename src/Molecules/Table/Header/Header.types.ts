import React from 'react';
import { Props as FlexboxProps } from '../../../Atoms/Flexbox/Flexbox.types';

type HtmlProps = {} & React.AllHTMLAttributes<HTMLDivElement & HTMLTableHeaderCellElement>;

export type Props = {
  name: string;
} & FlexboxProps &
  HtmlProps;

export type HeaderComponent = React.FC<Props>;
