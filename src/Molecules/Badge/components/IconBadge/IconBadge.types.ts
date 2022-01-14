import { ColorFn, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type IconBadgeProps = HtmlProps & {
  children: React.ReactNode;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | 'xl' | number;
};

export type IconBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & IconBadgeProps
>;
