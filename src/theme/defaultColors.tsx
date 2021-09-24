import { RawColors, RawColor } from './theme.types';

const defaultColors = {
  // BRAND
  brandBlue: '#00C8F5',
  brandGreen: '#D2F500',
  brandPink: '#FF2B83', // Included in Dark Mode
  brandTurquoise: '#00F0E1', // Included in Dark Mode

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: '#385E9D',
  complementaryBlue2: '#131F4F',
  complementaryGreen1: '#3A913F',
  complementaryGreen2: '#023C00',
  complementaryPink1: '#AC135A',
  complementaryPink2: '#78013A',
  complementaryTurquoise1: '#009195', // Included in Dark Mode
  complementaryTurquoise2: '#01424C', // Included in Dark Mode

  // GRAYSCALE PALETTE
  black: '#000000', // Included in Dark Mode
  gray0: '#282823', // Included in Dark Mode
  gray1: '#4B4B46', // Included in Dark Mode
  gray2: '#6E6E69', // Included in Dark Mode
  gray3: '#A0A09B', // Included in Dark Mode
  gray4: '#BCBCB6', // Included in Dark Mode
  gray5: '#D7D7D2', // Included in Dark Mode
  gray6: '#EBEBE8', // Included in Dark Mode
  gray7: '#F5F5F5', // Included in Dark Mode
  white: '#FFFFFF', // Included in Dark Mode

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: '#0046FF',
  ctaHover: '#003BD9',
  ctaPressed: '#0030B2',
  positive: '#00D200', // Included in Dark Mode
  negative: '#FF1900', // Included in Dark Mode
  negativeHover: '#D90E00',
  negativePressed: '#B20300',
  index: '#FFCF00', // Included in Dark Mode
  sfdrArticle9: '#41A21A',
  sfdrArticle8: '#85DA62',
} as RawColor;

const grayPalette = [
  defaultColors.gray6,
  defaultColors.gray4,
  defaultColors.gray3,
  defaultColors.gray1,
  defaultColors.gray0,
];

export default {
  ...defaultColors,
  palettes: {
    gray: grayPalette,
    pink: [
      defaultColors.brandPink,
      defaultColors.complementaryPink1,
      defaultColors.complementaryPink2,
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      ...grayPalette,
    ],
    blue: [
      defaultColors.brandBlue,
      defaultColors.complementaryBlue1,
      defaultColors.complementaryBlue2,
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      ...grayPalette,
    ],
    green: [
      defaultColors.brandGreen,
      defaultColors.complementaryGreen1,
      defaultColors.complementaryGreen2,
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      ...grayPalette,
    ],
    turquoise: [
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      defaultColors.complementaryTurquoise2,
      defaultColors.brandBlue,
      defaultColors.complementaryBlue1,
      ...grayPalette,
    ],
  },
} as RawColors;
