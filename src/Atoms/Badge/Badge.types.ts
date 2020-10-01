import React from 'react';
import { ColorFn } from '../../common/Types/sharedTypes';

type HtmlProps = {} & Omit<React.HTMLProps<HTMLDivElement>, 'color'>;

export type Props = {
  backgroundColor?: ColorFn;
  color?: ColorFn;
} & HtmlProps;

export type BadgeComponent = React.FC<Props>;
