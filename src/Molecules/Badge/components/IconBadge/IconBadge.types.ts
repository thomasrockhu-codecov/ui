import { ColorFn } from '../BaseBadge/BaseBadge.types';

type IconBadgeProps = {
  children: React.ReactNode;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | 'xl' | number;
};

export type IconBadgeComponent = React.FC<IconBadgeProps>;
