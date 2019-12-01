import { css } from 'styled-components';
import Color from 'color';
import { InnerProps } from './Button.types';

const HEIGHT = {
  s: 6,
  m: 8,
  l: 10,
};
const PADDING_VERTICAL = {
  s: 0,
  m: 1,
  l: 2,
};
const PADDING_HORIZONTAL = {
  s: 2,
  m: 3,
  l: 4,
};
const BORDER_SIZE = 2;

const getBorder = (color: string) => `
  &::before {
    content: '';
    display: block;
    position: absolute;
    border: ${BORDER_SIZE}px solid ${color};
    top: 0;
    left: 0;
    width: calc(100% - ${BORDER_SIZE * 2}px);
    height: calc(100% - ${BORDER_SIZE * 2}px);
  }
`;

const shared = css<InnerProps>`
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  ${p => (p.fullWidth ? `display: flex; width: 100%;` : `display: inline-flex;`)}
`;

const minHeight = css<InnerProps>`
  min-height: ${p => p.theme.spacing.unit(HEIGHT[p.size!])}px;
`;

const padding = css<InnerProps>`
  ${p => {
    const unit = PADDING_HORIZONTAL[p.size!];

    return `
      padding: ${p.theme.spacing.unit(PADDING_VERTICAL[p.size!])}px ${p.theme.spacing.unit(unit)}px;
    `;
  }}
`;

export const primaryStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${p => (p.disabled ? p.theme.color.disabledBackground : p.theme.color.cta)};
  color: ${p => (p.disabled ? p.theme.color.disabledText : p.theme.color.buttonText)};
  ${getBorder('transparent')}

  ${p =>
    p.disabled
      ? ''
      : `
    &:hover {
      background-color: ${Color(p.theme.color.cta).darken(0.1)};
    }
    &:active {
      background-color: ${Color(p.theme.color.cta).darken(0.2)};
    }
  `}
`;

export const secondaryStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.buttonSecondaryBackground};

  ${p => {
    const color = p.colorFn && p.colorFn(p.theme);

    return `
      color: ${p.disabled ? p.theme.color.disabledText : color || p.theme.color.cta};
      ${getBorder(p.disabled ? 'transparent' : color || p.theme.color.cta)}

      ${
        p.disabled
          ? ''
          : `
        &:hover {
          color: ${color ? Color(color).darken(0.2) : Color(p.theme.color.cta).darken(0.2)};
    
          &::before {
            border-color: ${
              color ? Color(color).darken(0.2) : Color(p.theme.color.cta).darken(0.2)
            };
          }
        }
    
        &:active {
          color: ${color ? Color(color).darken(0.3) : Color(p.theme.color.cta).darken(0.3)};
    
          &::before {
            border-color: ${
              color ? Color(color).darken(0.3) : Color(p.theme.color.cta).darken(0.3)
            };
          }
        }
      `
      }
    `;
  }};
`;

export const neutralStyles = css<InnerProps>`
  ${shared}
  ${minHeight}
  padding: 0;
  background-color: transparent;

  ${p => {
    const color = p.colorFn && p.colorFn(p.theme);

    return `
      color: ${p.disabled ? p.theme.color.disabledText : color || p.theme.color.text}
    `;
  }};
`;
