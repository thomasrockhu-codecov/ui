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

const fadeStyles = css<InternalProps & Props>`
  content: '';
  display: block;
  width: 100%;
  height: ${(p) => getValueFromNumberOrString(p.fadeHeight!, p.theme)};
  position: absolute;
  left: 0;
  pointer-events: none;
  background: transparent;
  z-index: 1;
  opacity: 0;
`;

export const fadeTopStyles = css<InternalProps & Props>`
  position: relative;

  &::before {
    ${fadeStyles}
    top: 0;
    background: ${(p) =>
      `linear-gradient(0deg, ${p.backgroundColor}00 0%, ${p.backgroundColor}ff 100%)`};
    ${(p) => (isNumber(p.intersectionTopRatio) ? `opacity: ${1 - p.intersectionTopRatio}` : '')};
  }
`;

export const fadeTopDesktopStyles = css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeTopStyles}
  }
`;

export const fadeBottomStyles = css<InternalProps & Props>`
  position: relative;

  &::after {
    ${fadeStyles}
    bottom: 0;
    background: ${(p) =>
      `linear-gradient(0deg, ${p.backgroundColor}ff 0%, ${p.backgroundColor}00 100%)`};
    ${(p) =>
      isNumber(p.intersectionBottomRatio) ? `opacity: ${1 - p.intersectionBottomRatio}` : ''};
  }
`;

export const fadeBottomDesktopStyles = css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeBottomStyles}
  }
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
