import { Props as TooltipProps } from '../../../Tooltip/Tooltip.types';

export type Props = {
  maxWidth?: string;
} & TooltipProps;

export type TruncateWithTooltipComponent = React.FC<Props>;
