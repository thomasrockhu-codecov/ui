export type StyledTooltipProps = {
  maxWidth: number;
  ariaLabel?: string;
  ref?: React.RefObject<any>;
};

export type Props = {
  label: React.ReactNode;
} & StyledTooltipProps;

export type TooltipContentComponent = React.FC<Props>;
