import styled from 'styled-components';
import { Props } from './Rect.types';

export const Rect = styled.div<Props>`
  width: ${(p: Props) => p.width || '100%'};
  height: ${(p: Props) => p.height || '50px'};
  background-color: ${(p: Props) => p.color || '#ccc'};
  border: 1px solid #ccc;
`;
