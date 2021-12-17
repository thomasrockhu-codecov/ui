import React from 'react';
import { ColorFn } from '../../../../common/Types';
import { BaseBadgeProps, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  $animateOnChange: boolean;
  $padding: number;
  badgeSize: number;
};

type BaseProps = HtmlProps & {
  badgeColor?: ColorFn;
  color?: ColorFn;
  animateOnChange?: boolean;
  symmetricShape?: boolean;
};

export type XSProps = BaseProps & {
  badgeSize: 'xs';
  children?: undefined;
};

export type Props = BaseProps & {
  badgeSize?: 's' | 'm' | 'l' | number;
  children?: React.ReactNode;
};

export type NotificationBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & (XSProps | Props)
>;
