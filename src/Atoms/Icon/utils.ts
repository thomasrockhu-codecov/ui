import { DefaultTheme } from 'styled-components';

import { assert } from '../../common/utils';
import { ColorFn } from './Icon.types';

const ALLOWED_COLOR_STRINGS = ['transparent', 'inherit', 'currentColor'];
export const getColor: (
  theme: DefaultTheme,
  defaultColor: string,
  colorFnOrColor?: ColorFn | string,
) => string = (theme, defaultColor, colorFnOrColor) => {
  if (typeof colorFnOrColor !== 'undefined') {
    if (typeof colorFnOrColor === 'function') {
      return colorFnOrColor(theme) as string;
    }

    if (ALLOWED_COLOR_STRINGS.includes(colorFnOrColor)) {
      return colorFnOrColor;
    }
    assert(
      ALLOWED_COLOR_STRINGS.includes(colorFnOrColor),
      `Incorrect string value for color, use t => t.color.<some color> instead. Allowed string values are: ${ALLOWED_COLOR_STRINGS.join(
        ', ',
      )}.`,
    );
  }
  return defaultColor;
};
