import styled from 'styled-components';
import { getColor } from './IconBase';
import { StyledChildProps } from './IconBase.types';

export default styled.path<StyledChildProps>`
  ${(p) =>
    `${p.cssAttribute ?? 'fill'}: ${getColor(
      p.theme,
      p.theme.color.backgroundBlack,
      p.strokeColorFn,
    )};`}
`;
