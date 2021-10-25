import { css } from 'styled-components';
import Color from 'color';
import { InnerProps } from './PillButton.types';

const shared = css<InnerProps>`
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  ${(p) => (p.$fullWidth ? `display: flex; width: 100%;` : `display: inline-flex;`)}
  padding: ${(p) => `${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px`};
  min-height: ${(p) => p.theme.spacing.unit(6)}px;
  max-height: ${(p) => p.theme.spacing.unit(6)}px;
  border: none;
  border-radius: ${(p) => p.theme.spacing.unit(3)}px;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`;

export const primaryStyles = css<InnerProps>`
  ${shared}
  background-color: ${(p) => (p.disabled ? p.theme.color.disabledBackground : p.theme.color.cta)};
  color: ${(p) => (p.disabled ? p.theme.color.disabledText : p.theme.color.buttonText)};

  ${(p) => {
    const background = p.theme.color.cta;

    return p.disabled
      ? ''
      : `
    &:hover {
      background-color: ${Color(background).darken(0.1)};
    }
    &:active {
      background-color: ${Color(background).darken(0.2)};
    }
  `;
  }}
`;

export const secondaryStyles = css<InnerProps>`
  ${shared}
  background-color: ${(p) => p.theme.color.background};

  ${(p) => {
    const color = p.theme.color.cta;

    return `
      color: ${p.disabled ? p.theme.color.disabledText : color};

      ${
        p.disabled
          ? ''
          : `
        &:hover {
          color: ${Color(color).darken(0.2)};
        }

        &:active {
          color: ${Color(color).darken(0.3)};
        }
      `
      }
    `;
  }};
`;
