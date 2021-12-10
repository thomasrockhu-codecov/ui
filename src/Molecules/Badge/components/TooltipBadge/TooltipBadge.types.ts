export type TooltipBadgeProps = {
  badgeSize?: 's' | 'l' | number;
  onClick?: (e: React.MouseEvent) => void;
};

export type TooltipBadgeComponent = React.ForwardRefExoticComponent<
  TooltipBadgeProps & React.RefAttributes<HTMLSpanElement>
>;
