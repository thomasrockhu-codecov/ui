import { TooltipProps } from '@reach/tooltip';

export type Props = {
  className?: string;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
} & Omit<TooltipProps, 'position'>;

export type TooltipComponent = React.FC<Props>;
