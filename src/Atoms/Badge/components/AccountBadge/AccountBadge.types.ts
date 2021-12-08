import { BaseBadgeProps, ColorFn } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  badgeSize: number;
};

type AccountBadgeProps = {
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | number;
};

export type AccountBadgeComponent = React.FC<AccountBadgeProps>;
