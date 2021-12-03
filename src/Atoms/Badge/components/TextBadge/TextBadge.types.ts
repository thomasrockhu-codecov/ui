import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BaseBadgeProps, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  $applyPadding: boolean;
  $animateOnChange: boolean;
};

type Props = {
  backgroundColor?: ColorFn;
  color?: ColorFn;
  animateOnChange?: boolean;
  variant?: 'square' | 'circle' | 'rect';
  weight?: string;
} & HtmlProps;

export type TextBadgeComponent = React.FC<Props>;
