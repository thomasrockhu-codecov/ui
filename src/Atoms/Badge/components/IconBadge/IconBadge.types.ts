import { ColorFn } from '../BadgeBase/BadgeBase.types';

type IconBadgeProps = {
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | 'xl' | number;
};

export type IconBadgeComponent = React.FC<IconBadgeProps>;
