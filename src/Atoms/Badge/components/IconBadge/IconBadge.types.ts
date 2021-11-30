import { ColorFn } from '../BadgeBase/BadgeBase.types';

type IconBadgeProps = {
  icon: string; // TODO: Get back to this
  iconColor?: ColorFn;
  secondaryIconColor?: ColorFn;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | 'xl';
};

export type IconBadgeComponent = React.FC<IconBadgeProps>;
