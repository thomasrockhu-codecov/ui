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
  overflow-x: auto;
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
  background: red;
  z-index: 1;
  opacity: 0;
`;

export const fadeTopStyles = css<InternalProps & Props>`
  position: relative;

  &::before {
    ${fadeStyles}
    top: 0;
    background: linear-gradient(0deg, #ffffff00 0%, #ffffffff 100%);
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
    background: linear-gradient(0deg, #ffffffff 0%, #ffffff00 100%);
    ${(p) =>
      isNumber(p.intersectionBottomRatio) ? `opacity: ${1 - p.intersectionBottomRatio}` : ''};
  }
`;

export const fadeBottomDesktopStyles = css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeBottomStyles}
  }
`;

export const fadeRightStyles = css<InternalProps & Props>`
  position: relative;

  &::after {
    ${fadeStyles}
    right: 0;
    background: linear-gradient(0deg, #ffffffff 0%, #ffffff00 100%);
    ${(p) =>
      isNumber(p.intersectionRightRatio) ? `opacity: ${1 - p.intersectionRightRatio}` : ''};
  }
`;

export const fadeRightDesktopStyles = css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeRightStyles}
  }
`;
export const fadeLeftStyles = css<InternalProps & Props>`
  position: relative;

  &::after {
    ${fadeStyles}
    left: 0;
    background: linear-gradient(0deg, #ffffffff 0%, #ffffff00 100%);
    ${(p) => (isNumber(p.intersectionLeftRatio) ? `opacity: ${1 - p.intersectionLeftRatio}` : '')};
  }
`;

export const fadeLeftDesktopStyles = css`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeLeftStyles}
  }
`;

export const intersectionStyles = css<Props>`
  height: 1px;
  width: 1px;
  position: absolute;
  right: 0;
  pointer-events: none;
  background-color: blue;
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
