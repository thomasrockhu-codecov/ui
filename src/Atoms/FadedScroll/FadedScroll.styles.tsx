import { css } from 'styled-components';
import { InternalProps, Props } from './FadedScroll.types';
import { getValueFromNumberOrString } from '../../common/utils';

export const flexAutoHeight = css`
  min-height: 0; /* Firefox */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

export const scroll = css<Pick<Props, 'maxHeight'>>`
  ${p =>
    p.maxHeight
      ? `max-height: ${getValueFromNumberOrString(p.maxHeight, p.theme)};`
      : flexAutoHeight}
  overflow-y: auto;
`;

export const scrollDesktop = css<Pick<Props, 'maxHeight'>>`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${scroll}
  }
`;

const fade = css<InternalProps & Props>`
  content: '';
  display: block;
  width: 100%;
  height: ${p => getValueFromNumberOrString(p.fadeHeight!, p.theme)};
  position: absolute;
  left: 0;
  pointer-events: none;
  background: transparent;
  z-index: 1;
  opacity: 0;
  transition: 0.3s opacity ease-out;
`;

export const fadeTop = css<InternalProps & Props>`
  position: relative;

  &::before {
    ${fade}
    top: 0;
    background: linear-gradient(0deg, #ffffff00 0%, #ffffffff 100%);
    ${p => p.intersectionTopOnScreen === false && `opacity: 1;`}
  }
`;

export const fadeTopDesktop = css`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeTop}
  }
`;

export const fadeBottom = css<InternalProps & Props>`
  position: relative;

  &::after {
    ${fade}
    bottom: 0;
    background: linear-gradient(0deg, #ffffffff 0%, #ffffff00 100%);
    ${p => p.intersectionBottomOnScreen === false && `opacity: 1;`}
  }
`;

export const fadeBottomDesktop = css`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeBottom}
  }
`;

export const intersection = css`
  height: ${p => p.theme.spacing.unit(1)}px;
  width: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  right: 0;
  pointer-events: none;
`;
