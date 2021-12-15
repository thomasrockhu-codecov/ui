export type StatusVariant = 'create' | 'complete' | 'pending' | 'error' | 'warning' | 'information';
export type StatusBadgeSize = 's' | 'm' | 'l' | 'xl';

type StatusBadgeProps = {
  variant?: StatusVariant;
  badgeSize?: StatusBadgeSize;
};

export type StatusBadgeComponent = React.FC<StatusBadgeProps>;
