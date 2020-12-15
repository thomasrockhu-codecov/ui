import { CSSProperties } from 'styled-components';
import { Props as TooltipProps } from '../../Tooltip.types';

export type Props = {
  position: TooltipProps['position'];
  style?: CSSProperties;
  ref?: React.RefObject<any>;
};

export type TooltipArrowComponent = React.FC<Props>;
