import { TooltipProps } from '@reach/tooltip';

type ReachProps = Pick<TooltipProps, 'label'> & Pick<TooltipProps, 'ariaLabel'>;

export type Props = {
  className?: string;
  children?: React.ReactNode;
  /** @default bottom */
  position?: 'top' | 'right' | 'bottom' | 'left';
} & ReachProps;

export type TooltipComponent = React.FC<Props>;
