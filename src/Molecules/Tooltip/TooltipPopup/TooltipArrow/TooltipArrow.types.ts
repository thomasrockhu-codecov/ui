import { CSSProperties } from 'styled-components';
import { ColorFn } from '../../../../common/Types';
import { Props as TooltipProps } from '../../Tooltip.types';

export type Props = {
  position: TooltipProps['position'];
  style?: CSSProperties;
  ref?: React.RefObject<any>;
  backgroundColor: ColorFn;
  borderColor: ColorFn;
};
