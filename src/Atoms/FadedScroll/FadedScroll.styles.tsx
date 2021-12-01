import { css } from 'styled-components';
import { InternalProps, Props } from './FadedScroll.types';
import { getValueFromNumberOrString, isNumber } from '../../common/utils';

const flexAutoHeightStyles = css`
  min-height: 0; /* Firefox */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

export const scrollStyles = css<Pick<Props, 'maxHeight'>>`
  ${(p) =>
    p.maxHeight
      ? `max-height: ${getValueFromNumberOrString(p.maxHeight, p.theme)};`
      : flexAutoHeightStyles}
  overflow-y: auto;
  width: 100%;
`;

export const scrollDesktopStyles = css<Pick<Props, 'maxHeight'>>`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${scrollStyles}
  }
`;

export const fadeStyles = css<InternalProps & Props>`
  position: relative;
  ${(p) =>
    isNumber(p.intersectionTopRatio)
      ? `-webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, ${p.intersectionTopRatio}) 0%,
    rgba(0, 0, 0, 1) ${p.fadeTopPercentage}%,
    rgba(0, 0, 0, 1) ${p.fadeBottomPercentage}%,
    rgba(0, 0, 0, ${p.intersectionBottomRatio}) 100%
    )`
      : ''};
`;

export const intersectionStyles = css<Props>`
  height: ${(p) => p.theme.spacing.unit(4)}px;
  width: ${(p) => p.theme.spacing.unit(1)}px;
  position: absolute;
  right: 0;
  pointer-events: none;
`;

// prettier-ignore
export const containerStyles = css<Props>`
  ${p => !p.maxHeight && `
    display: flex;
    height: 100%;

    ${flexAutoHeightStyles}
  `}
`;

// prettier-ignore
export const scrollerStyles = css<Props>`
  ${p => !p.maxHeight && `
    flex-grow: 1;
    width: 100%; /*IE fix*/
  `}

  ${p => (p.enableMobileFade ? scrollStyles : scrollDesktopStyles)}
`;
