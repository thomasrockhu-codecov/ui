import { HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StatusVariant = 'create' | 'complete' | 'pending' | 'error' | 'warning' | 'information';
export type StatusBadgeSize = 'xs' | 's' | 'l' | 'xl';

export type StatusBadgeProps = HtmlProps & {
  variant?: StatusVariant;
  badgeSize?: StatusBadgeSize;
};

export type StatusBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & StatusBadgeProps
>;
