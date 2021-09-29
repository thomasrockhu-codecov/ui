import React from 'react';
import { ColorFn } from '../../common/Types';

type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color'>;

export type Props = {
  backgroundColor?: ColorFn;
  color?: ColorFn;
  animateOnChange?: boolean;
  variant?: 'square' | 'circle';
  weight?: string;
} & HtmlProps;

export type Wrapper = Props & {
  $animateOnChange?: boolean;
  size: number;
};

export type BadgeComponent = React.FC<Props>;
export type WrapperComponent = React.FC<Wrapper>;
