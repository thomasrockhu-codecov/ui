import { HtmlProps } from '../BaseBadge/BaseBadge.types';

export type TooltipBadgeProps = HtmlProps & {
  badgeSize?: 's' | 'l' | number;
  onClick?: (e: React.MouseEvent) => void;
};

export type TooltipBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & TooltipBadgeProps
>;
