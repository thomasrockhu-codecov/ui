import { RawColors } from './theme.types';
import defaultColors from './defaultColors';

const accessabilityColors = {
  ...defaultColors,
  // ACCESSIBLE FUNCTIONAL COLORS
  cta: '#0046FF',
  ctaPressed: '#003BD9',
  positive: '#008A00',
  negative: '#AC135A',
  negativePressed: '#78013A',
  index: '#DFC700',
} as RawColors;

const paletteA11y = [
  accessabilityColors.brandBlue,
  accessabilityColors.complementaryBlue1,
  accessabilityColors.complementaryBlue2,
  accessabilityColors.brandPink,
  accessabilityColors.complementaryPink2,
  ...accessabilityColors.palettes.gray,
];

export default {
  ...accessabilityColors,
  palettes: {
    ...accessabilityColors.palettes,
    pink: paletteA11y,
    blue: paletteA11y,
    green: paletteA11y,
    turquoise: paletteA11y,
  },
} as RawColors;
