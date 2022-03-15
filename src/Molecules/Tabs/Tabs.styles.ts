import { css } from 'styled-components';
import { ScrollStyleProps } from './Tabs.types';

export const scrollStyles = css<ScrollStyleProps>`
  ${({ $scrollOptions }) =>
    $scrollOptions.active
      ? `
  overflow: auto;
  overflow-x: scroll;
  white-space: nowrap;
  `
      : ``};

  ${({ $scrollOptions }) =>
    $scrollOptions.scrollBarHidden
      ? ` ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */`
      : ``};
`;
