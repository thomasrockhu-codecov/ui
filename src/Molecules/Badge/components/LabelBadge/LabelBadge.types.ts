import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BaseBadgeProps, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  $type?: 'primary' | 'secondary';
};

export type LabelBadgeProps = HtmlProps & {
  badgeColor?: ColorFn;
  color?: ColorFn;
  type?: 'primary' | 'secondary';
  weight?: string;
  children: React.ReactNode;
};

export type LabelBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & LabelBadgeProps
>;
