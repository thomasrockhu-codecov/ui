import { ColorFn } from '../BaseBadge/BaseBadge.types';

type AccountBadgeProps = {
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | number;
};

export type AccountBadgeComponent = React.FC<AccountBadgeProps>;
