import styled, { css } from 'styled-components';
import { Props } from './DropdownBubble.types';

const TRIANGLE_SIZE = 6;
const TOP_OFFSET = 10;

const leftAndRightCss = css<Props>`
  ${(p) => {
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

const bottomAndTopPlacementCss = css<Props>`
  ${(p) => {
    switch (p.placement) {
      case 'top':
        return `transform: translateY(-${TOP_OFFSET}px);`;
      case 'bottom':
      default:
        return `transform: translateY(${TOP_OFFSET}px);`;
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

const getTrianglePositionAndColor = (
  placement: string | undefined,
  color: string,
  offset: number = 0,
) => {
  switch (placement) {
    case 'top':
      return `
        top: ${offset ? `calc(100% - ${offset}px)` : '100%'};
        border-top: ${TRIANGLE_SIZE}px solid;
        border-top-color: ${color};
      `;
    case 'bottom':
    default:
      return `
        bottom: ${offset ? `calc(100% - ${offset}px)` : '100%'};
        border-bottom: ${TRIANGLE_SIZE}px solid;
        border-bottom-color: ${color};
      `;
  }
};

const triangleCss = css`
  &:before {
    ${leftAndRightCss}
    ${commonTriangleCss}
    ${(p) => getTrianglePositionAndColor(p.placement, p.theme.color.bubbleBorder)}
  }
  &:after {
    ${leftAndRightCss}
    ${commonTriangleCss}
    ${(p) => getTrianglePositionAndColor(p.placement, p.theme.color.bubbleBackground, 1)}
  }
`;

export const DropdownBubble = styled.div<Props>`
  position: relative;
  ${(p) => (p.maxHeight ? `max-height: ${p.maxHeight};` : '')}
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid ${(p) => p.theme.color.bubbleBorder};
  background-color: ${(p) => p.theme.color.bubbleBackground};
  box-shadow: 0 2px 4px 0 rgba(40, 40, 35, 0.15);
  color: ${(p) => p.theme.color.text};
  ${bottomAndTopPlacementCss}
  ${triangleCss}
`;
