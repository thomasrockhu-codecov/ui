type TooltipBadgeProps = {
  badgeSize?: 's' | 'l' | number;
  onClick?: () => void;
};

export type TooltipBadgeComponent = React.FC<TooltipBadgeProps>;
