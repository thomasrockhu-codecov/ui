import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BadgeBaseProps, HtmlProps } from '../BadgeBase/BadgeBase.types';

export type StyledBadgeBaseProps = BadgeBaseProps & {
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
