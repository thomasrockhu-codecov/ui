import { Props as TooltipProps } from '../Tooltip.types';

export type StyledTooltipPopupProps = {
  id: string;
  inModal: TooltipProps['inModal'];
  maxWidth: number;
};

export type Props = {
  label: React.ReactNode;
  position: TooltipProps['position'];
  triggerElement?: Element;
  ariaLabel?: string;
  ref?: React.RefObject<any>;
} & StyledTooltipPopupProps;
