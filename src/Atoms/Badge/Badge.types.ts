import React from 'react';
import { ColorFn } from '../../common/Types/sharedTypes';

type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color'>;

export type Props = {
  backgroundColor?: ColorFn;
  color?: ColorFn;
  animateOnChange?: boolean;
} & HtmlProps;

export type Circle = Props & {
  $animateOnChange?: boolean;
  size: number;
};

export type BadgeComponent = React.FC<Props>;
export type CircleComponent = React.FC<Circle>;
