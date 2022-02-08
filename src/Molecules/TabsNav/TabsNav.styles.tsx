import { css } from 'styled-components';
import { isNumber } from '../../common/utils';
import { ScrollStyleProps } from './TabsNav.types';

const INTERSECTION_RATIO_BREAKPOINT = 0.9;

export const scrollStyles = css<ScrollStyleProps>`
  ${(p) =>
    p.$scrollOptions.active
      ? `
  overflow: auto;
  white-space: nowrap;
  ${
    isNumber(p.$intersectionLeftRatio) && p.$intersectionLeftRatio <= INTERSECTION_RATIO_BREAKPOINT
      ? `
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    height: ${`${p.theme.spacing.unit(p.$height)}`}px;
    pointer-events: none;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #FFFFFF 100%);
    width: 10%;
  }
  `
      : ``
  };
  ${
    isNumber(p.$intersectionRightRatio) &&
    p.$intersectionRightRatio <= INTERSECTION_RATIO_BREAKPOINT
      ? `
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    right: 0;
    height: ${`${p.theme.spacing.unit(p.$height)}`}px;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF 100%);
    width: 10%;
  }
  `
      : ``
  };
  ${
    p.$scrollOptions.scrollBarHidden
      ? ` ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */`
      : ``
  };
  `
      : ``};
`;
