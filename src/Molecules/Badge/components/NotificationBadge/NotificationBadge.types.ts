import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BaseBadgeProps, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  $animateOnChange: boolean;
  $padding: number;
  badgeSize: number;
};

type Props = {
  badgeColor?: ColorFn;
  color?: ColorFn;
  badgeSize?: 'xs' | 's' | 'm' | 'l' | number;
  animateOnChange?: boolean;
  symmetricShape?: boolean;
} & HtmlProps;

export type NotificationBadgeComponent = React.FC<Props>;
