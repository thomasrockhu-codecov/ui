export type Props = {
  label: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
  /** Adjusts z-index when used inside Modal */
  inModal?: boolean;
  /** max-width in units */
  maxWidth?: number;
};

export type TooltipComponent = React.FC<Props>;
