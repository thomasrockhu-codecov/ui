import { ColorFn } from '../BaseBadge/BaseBadge.types';

type AccountBadgeProps = {
  children: React.ReactNode;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | number;
};

export type AccountBadgeComponent = React.FC<AccountBadgeProps>;
