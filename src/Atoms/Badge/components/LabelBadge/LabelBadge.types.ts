import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BaseBadgeProps, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  $type?: 'primary' | 'secondary';
};

type Props = {
  badgeColor?: ColorFn;
  color?: ColorFn;
  type?: 'primary' | 'secondary';
  weight?: string;
  children: React.ReactNode;
} & HtmlProps;

export type LabelBadgeComponent = React.FC<Props>;
