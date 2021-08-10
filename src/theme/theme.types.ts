export type MediaQuery = string;
/** Number of pixels */
export type ThemeConfig = {
  a11yColors?: boolean;
  darkColors?: boolean;
};
type Unit = {
  (times: number): number;
  toString: () => string;
  valueOf: () => number;
};
export type RawColor = {
  // BRAND
  brandBlue: string;
  brandGreen: string;
  brandPink: string;
  brandTurquoise: string;

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: string;
  complementaryBlue2: string;
  complementaryGreen1: string;
  complementaryGreen2: string;
  complementaryPink1: string;
  complementaryPink2: string;
  complementaryTurquoise1: string;
  complementaryTurquoise2: string;

  // GRAYSCALE PALETTE
  black: string;
  gray0: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  white: string;

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: string;
  ctaHover: string;
  ctaPressed: string;
  positive: string;
  negative: string;
  negativeHover: string;
  negativePressed: string;
  index: string;
};

export type RawColors = RawColor & {
  palettes: {
    pink: string[];
    green: string[];
    blue: string[];
    turquoise: string[];
    gray: string[];
  };
};

type NumberOrObjectWithNumber = number | { size: number };

export type ThemeColorsVersion = 'default' | 'a11y' | 'dark';

export type ThemeColors = {
  /** white */
  backgroundInput: RawColor['white'];
  /** gray7 */
  background: RawColor['gray7'];
  /** black */
  backgroundBlack: RawColor['black'];
  /** complementaryBlue1 */
  barScaleActiveBar: RawColor['complementaryBlue1'];
  /** gray6 */
  barScaleInactiveBar: RawColor['gray6'];
  /** gray0 */
  text: RawColor['gray0'];
  /** white */
  textLight: RawColor['white'];
  /** gray2 */
  label: RawColor['gray2'];
  /** gray0 */
  bulbForeground: RawColor['gray0'];
  /** brandGreen */
  bulbBackground: RawColor['brandGreen'];
  /** cta */
  buy: RawColor['cta'];
  /** ctaPressed */
  buyActive: RawColor['ctaPressed'];
  /** white */
  buttonText: RawColor['white'];
  buttonTextLight: RawColor['white'];
  /** cta */
  borderActive: RawColor['cta'];
  /** white */
  bubbleBackground: RawColor['white'];
  /** gray4 */
  bubbleBorder: RawColor['gray4'];
  /** gray2 */
  bubbleSecondaryText: RawColor['gray2'];
  /** gray0 */
  tableBorder: RawColor['gray0'];
  /** negative */
  sell: RawColor['negative'];
  /** negativePressed */
  sellActive: RawColor['negativePressed'];
  /** cta */
  cta: RawColor['cta'];
  /** creditsPiePrimary */
  creditsPiePrimary: RawColor['complementaryPink1'];
  /** creditsPieSecondary */
  creditsPieSecondary: RawColor['complementaryPink2'];
  /** otherMonthDateText */
  otherMonthDateText: RawColor['gray4'];
  /** positive */
  positive: RawColor['positive'];
  /** negative */
  negative: RawColor['negative'];
  /** negative or brandPink */
  negativeBlackBackground: RawColor['negative'];
  /** index */
  warning: RawColor['index'];
  /** white */
  card: RawColor['white'];
  /** gray6 */
  divider: RawColor['gray6'];
  /** gray4 */
  emptyState: RawColor['gray4'];
  /** gray2 */
  fundExchange: RawColor['gray2'];
  /** gray0 */
  separator: RawColor['gray0'];
  /** gray0 */
  backgroundDark: RawColor['gray0'];
  /** gray1 */
  searchBackground: RawColor['gray1'];
  /** gray3 */
  disabledText: RawColor['gray3'];
  /** gray6 */
  disabledBackground: RawColor['gray6'];
  /** white */
  buttonSecondaryBackground: RawColor['white'];
  /** gray2 */
  accordionText: RawColor['gray2'];
  /** 63 percent of gray2 */
  modalBackdrop: string;
  /** white */
  module: RawColor['white'];
  /** 3 percent of black */
  shadowCard: string;
  /** 16 percent of black */
  shadowModal: string;
  /** 5 percent of black */
  shadowInput: string;
  /** 5 percent of black */
  shadowSwitch: string;
  /** complementaryGreen1 */
  shareville: string;
  /** gray6 */
  skeleton: RawColor['gray6'];
  /** black */
  spinnerBlack: RawColor['black'];
  /** white */
  spinnerWhite: RawColor['white'];
  /** index */
  starRating: RawColor['index'];
  /** gray6 */
  starRatingOff: RawColor['gray6'];
  /** index */
  streamingBolt: RawColor['index'];
  /** gray0 */
  svgFill: RawColor['gray0'];
  /** gray2 */
  svgStroke: RawColor['gray2'];
  /** white */
  svgStokeLight: RawColor['white'];
  /** 10 percent of cta */
  switchReadOnlyTrackBg: string;
  /** gray7 */
  switchReadOnlyKnobBg: RawColor['gray7'];
  /** 10 percent of cta */
  iconBackdropCta: string;
  /** gray4 */
  inputBorder: RawColor['gray4'];
  /** gray1 */
  inputBorderHover: RawColor['gray1'];
  /** white */
  tableRowBackground: RawColor['white'];
  /** gray7 */
  tableRowHover: RawColor['gray7'];
  /** gray2 */
  datePickerWithinRangeBackground: string;
  /** gray2 */
  datePickerWithinRangeFade: string;
  /** negative */
  inputBorderError: RawColor['negative'];
  /** positive */
  inputBorderSuccess: RawColor['positive'];
  /** gray6 */
  flagBorder: RawColor['gray6'];
  /** white */
  selectOptionBackground: RawColor['white'];
  /** complementaryGreen1 */
  generationSavingsTimelineColor1: RawColor['complementaryGreen1'];
  /** complementaryPink1 */
  generationSavingsTimelineColor2: RawColor['complementaryPink1'];
  /** brandBlue */
  generationSavingsTimelineColor3: RawColor['brandBlue'];
  /** complementaryBlue1 */
  generationSavingsTimelineColor4: RawColor['complementaryBlue1'];
  /** brandPink */
  guidanceSelectionCardIcon: RawColor['brandPink'];
  /** gray6 */
  orderDepthBackground: RawColor['gray6'];
  /** gray5 */
  orderDepthDarkBackground: RawColor['gray5'];
  /** gray1 */
  orderAccountLabel: RawColor['gray1'];
  /** complementaryTurquoise1 */
  listItemBackgroundHover: string;
  /** complementaryBlue2 */
  loanRatesGraphColor2: RawColor['complementaryBlue2'];
  /** brandGreen */
  menuAccent1: RawColor['brandGreen'];
  /** brandTurquoise */
  menuAccent2: RawColor['brandTurquoise'];
  /** index */
  menuAccent3: RawColor['index'];
  /** brandPink */
  menuAccent4: RawColor['brandPink'];
  /** brandBlue */
  menuAccent5: RawColor['brandBlue'];
  /** gray5 */
  messageCentralFaqIcon: RawColor['gray5'];
  /** gray4 */
  messageCentralFaqButtonBorder: RawColor['gray4'];
  /** gray5 */
  selectionCardBorder: RawColor['gray5'];
  /** gray2 */
  selectionCardText: RawColor['gray2'];
  /** cta */
  sliderColor: RawColor['cta'];
  /** brandGreen */
  sliderSecondary: RawColor['brandGreen'];
  /** gray6 */
  sliderDisabled: RawColor['gray6'];
  /** gray6 */
  sliderBackgroundColor: RawColor['gray6'];
  /** cta */
  statusFulfilledBackgroundColor: RawColor['cta'];
  /** white */
  statusFulfilledTextColor: RawColor['white'];
  /** white */
  sliderThumbBackground: RawColor['white'];
  /** gray6 */
  dateAvatarBackground1: RawColor['gray6'];
  /** gray7 */
  dateAvatarBackground2: RawColor['gray7'];
  /** gray2 */
  dateAvatarText1: RawColor['gray2'];
  /** gray0 */
  dateAvatarText2: RawColor['gray0'];
  /** index */
  transferPendingIconColor: RawColor['index'];
  /** cta */
  timelineActive: RawColor['cta'];
  /** positive */
  timelineSuccess: RawColor['positive'];
  /** index */
  timelineWarning: RawColor['index'];
  /** negative */
  timelineFailure: RawColor['negative'];
  /** gray4 */
  timelineNext: RawColor['gray4'];
  /** brandPink */
  transferProgressBar1: RawColor['brandPink'];
  /** positive */
  transferProgressBar2: RawColor['positive'];
  /** gray5 */
  transferProgressBar3: RawColor['gray5'];
  /** gray1 */
  transferProgressBarText1: RawColor['gray1'];
  /** gray2 */
  transferProgressBarText2: RawColor['gray2'];
  /** 10 percent of complementaryBlue1 */
  transferStatusBannerBackground1: string;
  /** 10 percent of complementaryPink1 */
  transferStatusBannerBackground2: string;
  /** 10 percent of index */
  transferStatusBannerBackground3: string;
  /** complementaryBlue1 */
  transferStatusBannerText1: RawColor['complementaryBlue1'];
  /** complementaryPink1 */
  transferStatusBannerText2: RawColor['complementaryPink1'];
  /** gray0 */
  transferStatusBannerText3: RawColor['gray0'];
  /** gray0 */
  transferStatusBannerChevron: RawColor['gray0'];
  /** brandBlue */
  onboardingAccentBlue: RawColor['brandBlue'];
  /** brandGreen */
  onboardingAccentGreen: RawColor['brandGreen'];
  /** brandPink */
  onboardingAccentPink: RawColor['brandPink'];
  /** brandTurquoise */
  onboardingAccentTurquoise: RawColor['brandTurquoise'];
  /** white */
  progressBarText: RawColor['white'];
  /** positive */
  progressBarDone: RawColor['positive'];
  /** positive */
  progressBarFailure: RawColor['negative'];
  /** index */
  progressBarWarning: RawColor['index'];
  /** cta */
  progressBarActive: RawColor['cta'];
  /** gray4 */
  progressBarNext: RawColor['gray4'];
  /** gray6 */
  indexFundsBackground: RawColor['gray6'];
  /** brandBlue */
  indexFundsNorwegianAccent: RawColor['brandBlue'];
  /** complementaryPink1 */
  investmentPredictionGraphPink: RawColor['complementaryPink1'];
  /** complementaryBlue2 */
  investmentPredictionGraphBlue: RawColor['complementaryBlue2'];
  /** complementaryGreen2 */
  investmentPredictionGraphGreen: RawColor['complementaryGreen2'];
  /** complementaryTurquoise2 */
  investmentPredictionGraphTurquoise: RawColor['complementaryTurquoise2'];
  /** brandPink, brandBlue, complementaryBlue2, black, complementaryTurquoise1 */
  indexFundsFinnishAccent: string[];
  paletteMap: string[];
  palettePink: string[];
  paletteGreen: string[];
  paletteBlue: string[];
  paletteTurquoise: string[];
  paletteLineGraph: string[];
  /** gray6 */
  privateBankingBannerTitle: RawColor['gray6'];
  /** white */
  privateBankingBannerText: RawColor['white'];
  /** gray6 */
  privateBankingBannerBackground: RawColor['gray6'];
  /** brandTurquoise */
  marketingCardMortageHighlight: RawColor['brandTurquoise'];
  /** @deprecated
   * gray3 */
  disabled: RawColor['gray3'];
  /** @deprecated
   * complementaryBlue2 */
  mapColor1: RawColor['complementaryBlue2'];
  /** @deprecated
   * complementaryBlue1 */
  mapColor2: RawColor['complementaryBlue1'];
  /** @deprecated
   * brandBlue */
  mapColor3: RawColor['brandBlue'];
  /** @deprecated
   * gray1 */
  mapColor4: RawColor['gray1'];
  /** @deprecated
   * gray3 */
  mapColor5: RawColor['gray3'];
  /** @deprecated
   * brandPink */
  pieChartColor2: RawColor['brandPink'];
};

export type ColorSets = {
  /** Semantic names for the colors */
  color: ThemeColors;
};

export type Theme = {
  color: ThemeColors;
  spacing: {
    /**
     * One unit, all spacing should be handled with this
     * @example
     * margin: ${({ theme }) => theme.spacing.unit * 4}px;
     * @example
     * margin: ${({ theme }) => theme.spacing.unit(4)}px;
     */
    unit: Unit;
    /** Number of units in gutter */
    gutter: 5;
  };

  breakpoints: {
    /** Tablet, mobile size: 760; offset: 5; */
    sm: Record<'offset' | 'size', number>;
    /** Tablet, desktop size: 976; offset: 5; */
    md: Record<'offset' | 'size', number>;
    /** Desktop size: 1280; offset: 5; */
    lg: Record<'offset' | 'size', number>;
    /** Desktop big size: 1600; offset: 5; */
    xl: Record<'offset' | 'size', number>;
  };

  size: {
    /** Mobile */
    xs: 360;
    /** Tablet, mobile */
    sm: 760;
    /** Tablet, desktop */
    md: 976;
    /** Desktop */
    lg: 1280;
    /** Desktop big */
    xl: 1600;
  };

  media: {
    /**
     * @param size One of theme.breakpoints
     * @example
     * styled.div`${({ theme }) => theme.media.lessThan(theme.breakpoints.md)} {}`
     */
    lessThan: (size: NumberOrObjectWithNumber) => MediaQuery;
    /**
     * @param size One of theme.breakpoints
     * @example
     * styled.div`${({ theme }) => theme.media.greaterThan(theme.breakpoints.lg)} {}`
     */
    greaterThan: (size: NumberOrObjectWithNumber) => MediaQuery;
    /**
     * @param size1 One of theme.breakpoints
     * @param size2 One of theme.breakpoints
     * @example
     * styled.div`${({ theme }) => theme.media.between(theme.breakpoints.md, theme.breakpoints.lg)} {}`
     */
    between: (size1: NumberOrObjectWithNumber, size2: NumberOrObjectWithNumber) => MediaQuery;
  };
  /** Some units for animation */
  animation: {
    duration: {};
    easing: {};
  };
  zIndex: {
    footer: 100;
    header: 200;
    dropdown: 300;
    overlay: 400;
    modal: 500;
    overlayInModal: 600;
  };
  isHighContrastMode: boolean;
  isDarkMode: boolean;
};
