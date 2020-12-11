import { Props as TooltipProps } from '../Tooltip.types';

export type StyledTooltipPopupProps = {
  inModal: TooltipProps['inModal'];
  maxWidth: TooltipProps['maxWidth'];
};

export type Props = {
  label: React.ReactNode;
  position: TooltipProps['position'];
  triggerElement?: Element;
  ariaLabel?: string;
  ref?: React.RefObject<any>;
} & StyledTooltipPopupProps;

export type TooltipPopupComponent = React.FC<Props>;
