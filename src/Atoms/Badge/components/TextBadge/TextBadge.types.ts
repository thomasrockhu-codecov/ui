import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BadgeBaseProps } from '../BadgeBase/BadgeBase.types';

type HtmlProps = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'color'>;

export type StyledBadgeBaseProps = BadgeBaseProps & {
  $applyPadding: boolean;
  $animateOnChange: boolean;
};

export type Props = {
  backgroundColor?: ColorFn;
  color?: ColorFn;
  animateOnChange?: boolean;
  variant?: 'square' | 'circle' | 'rect';
  weight?: string;
} & HtmlProps;

export type TextBadgeComponent = React.FC<Props>;
