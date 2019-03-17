import { css } from 'styled-components';
import { Props } from './Text.types';

export const styles = css`
  ${(p: Props) =>
    p.styled
      ? css`
          font-size: 12px;
          font-family: ${p.as === 'p' ? '"Comic Sans MS"' : 'sans'};
        `
      : ''}
`;
