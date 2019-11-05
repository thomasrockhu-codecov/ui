import styled, { css } from 'styled-components';
import { Props } from './DropdownBubble.types';

const TRIANGLE_SIZE = 6;

const leftAndRightCss = css<Props>`
  ${p => {
    switch (p.position) {
      case 'left':
        return 'left: 20px;';
      case 'center':
        return 'left: 50%;';
      case 'right':
      default:
        return 'right: 20px;';
    }
  }}
`;

const commonTriangleCss = css<any>`
  position: absolute;
  width: 0;
  height: 0;
  content: '';
  speak: none;
  border-left: ${TRIANGLE_SIZE}px solid transparent;
  border-right: ${TRIANGLE_SIZE}px solid transparent;
`;

const triangleCss = css`
  &:before {
    ${leftAndRightCss}
    ${commonTriangleCss}
  top: -${TRIANGLE_SIZE}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: ${p => p.theme.color.bubbleBorder};
  }
  &:after {
    ${leftAndRightCss}
    ${commonTriangleCss}
  top: -${TRIANGLE_SIZE - 1}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: ${p => p.theme.color.bubbleBackground};
  }
`;

export const DropdownBubble = styled.div<Props>`
  position: relative;
  top: 10px;
  border: 1px solid ${p => p.theme.color.bubbleBorder};
  background-color: ${p => p.theme.color.bubbleBackground};
  box-shadow: 0 2px 4px 0 rgba(40, 40, 35, 0.15);
  ${triangleCss}
`;
