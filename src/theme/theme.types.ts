type MediaQuery = string;
/** Number of pixels */
export type ThemeConfig = {
  a11yColors?: boolean;
};
type Unit = {
  (times: number): number;
  toString: () => string;
  valueOf: () => number;
};
export type RawColor = {
  // BRAND
  brandBlue: '#00C8F5';
  brandGreen: '#D2F500';
  brandPink: '#FF2B83';
  brandTurquoise: '#00F0E1';

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: '#385E9D';
  complementaryBlue2: '#131F4F';
  complementaryGreen1: '#3A913F';
  complementaryGreen2: '#023C00';
  complementaryPink1: '#AC135A';
  complementaryPink2: '#78013A';
  complementaryTurquoise1: '#009195';
  complementaryTurquoise2: '#01424C';

  // GRAYSCALE PALETTE
  black: '#000000';
  gray0: '#282823';
  gray1: '#4B4B46';
  gray2: '#6E6E69';
  gray3: '#A0A09B';
  gray4: '#BCBCB6';
  /** @deprecated */ gray5: '#D7D7D2';
  gray6: '#EBEBE8';
  gray7: '#F5F5F5';
  white: '#FFFFFF';

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: '#0046FF';
  positive: '#00D200';
  negative: '#FF1900';
  index: '#FFCF00';

  // ACCESSIBLE FUNCTIONAL COLORS
  a11yCta: '#2D67FF';
  a11yPositive: '#008A00';
  a11yNegative: '#E81700';
  a11yIndex: '#C15700';

  // PILL COLORS
  pill1: '#F5F5F5';
  pill2: '#EBEBE8';
  pill3: '#D7D7D2';
  pill4: '#BCBCB6';
  pill5: '#A0A09B';
  pill6: '#6E6E69';
  pill7: '#4B4B46';
  pill8: '#282823';
  pill9: '#000000';
  pill10: '#D2F500';
  pill11: '#01424C';
  pill12: '#00D200';
  pill13: '#01424C';
  pill14: '#131F4F';
  pill15: '#023C00';
  pill16: '#00C8F5';
  pill18: '#00F0E1';
  pill19: '#FF2B83';
  pill20: '#385E9D';
  pill21: '#3A913F';
  pill22: '#009195';
  pill23: '#AC135A';
};

type NumberOrObjectWithNumber = number | { size: number };

export type Theme = {
  /** Semantic names for the colors */
  color: {
    /** white */
    backgroundInput: RawColor['white'];
    /** gray7 */
    background: RawColor['gray7'];
    /** black */
    backgroundBlack: RawColor['black'];
    /** gray0 */
    text: RawColor['gray0'];
    /** white */
    textLight: RawColor['white'];
    /** gray2 */
    label: RawColor['gray2'];
    /** cta */
    buy: RawColor['cta'] | RawColor['a11yCta'];
    /** 3 percent darker cta */
    buyActive: string;
    /** white */
    buttonText: RawColor['white'];
    /** cta */
    borderActive: RawColor['cta'] | RawColor['a11yCta'];
    /** white */
    bubbleBackground: RawColor['white'];
    /** gray4 */
    bubbleBorder: RawColor['gray4'];
    /** negative */
    sell: RawColor['negative'] | RawColor['a11yNegative'];
    /** 3 percent darker negative */
    sellActive: string;
    /** cta */
    cta: RawColor['cta'] | RawColor['a11yCta'];
    /** creditsPiePrimary */
    creditsPiePrimary: RawColor['complementaryPink1'];
    /** creditsPieSecondary */
    creditsPieSecondary: RawColor['complementaryPink2'];
    /** positive */
    positive: RawColor['positive'] | RawColor['a11yPositive'];
    /** negative */
    negative: RawColor['negative'] | RawColor['a11yNegative'];
    /** index */
    warning: RawColor['index'] | RawColor['a11yIndex'];
    /** white */
    card: RawColor['white'];
    /** gray6 */
    divider: RawColor['gray6'];
    /** gray0 */
    backgroundDark: RawColor['gray0'];
    /** @deprecated
     * gray3 */
    disabled: RawColor['gray3'];
    /** gray3 */
    disabledText: RawColor['gray3'];
    /** gray6 */
    disabledBackground: RawColor['gray6'];
    /** white */
    buttonSecondaryBackground: RawColor['white'];
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
    /** gray4 */
    inputBorder: RawColor['gray4'];
    /** gray1 */
    inputBorderHover: RawColor['gray1'];
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
    /** gray6 */
    orderDepthBackground: RawColor['gray6'];
    /** gray5 */
    orderDepthDarkBackground: RawColor['gray5'];
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
    /** brandBlue */
    barChartColor1: RawColor['brandBlue'];
    /** complementaryBlue2 */
    barChartColor2: RawColor['complementaryBlue2'];
    /** complementaryBlue1 */
    barChartColor3: RawColor['complementaryBlue1'];
    /** complementaryGreen1 */
    barChartColor4: RawColor['complementaryGreen1'];
    /** complementaryPink1 */
    barChartColor5: RawColor['complementaryPink1'];
    /** index */
    barChartColor6: RawColor['index'];
    /** complementaryGreen1 */
    barChartColor7: RawColor['complementaryGreen1'];
    /** brandGreen */
    columnChartColor1: RawColor['brandGreen'];
    /** complementaryGreen2 */
    columnChartColor2: RawColor['complementaryGreen2'];
    /** complementaryGreen1 */
    columnChartColor3: RawColor['complementaryGreen1'];
    /** complementaryTurquoise1 */
    columnChartColor4: RawColor['complementaryTurquoise1'];
    /** complementaryTurquoise2 */
    columnChartColor5: RawColor['complementaryTurquoise2'];
    /** complementaryPink2 */
    pieChartColor1: RawColor['complementaryPink2'];
    /** brandPink */
    pieChartColor2: RawColor['brandPink'];
    /** gray4 */
    pieChartColor3: RawColor['gray4'];
    /** pill colors */
    pill1: RawColor['pill1'];
    pill2: RawColor['pill2'];
    pill3: RawColor['pill3'];
    pill4: RawColor['pill4'];
    pill5: RawColor['pill5'];
    pill6: RawColor['pill6'];
    pill7: RawColor['pill7'];
    pill8: RawColor['pill8'];
    pill9: RawColor['pill9'];
    pill10: RawColor['pill10'];
    pill11: RawColor['pill11'];
    pill12: RawColor['pill12'];
    pill13: RawColor['pill13'];
    pill14: RawColor['pill14'];
    pill15: RawColor['pill15'];
    pill16: RawColor['pill16'];
    pill18: RawColor['pill18'];
    pill19: RawColor['pill19'];
    pill20: RawColor['pill20'];
    pill21: RawColor['pill21'];
    pill22: RawColor['pill22'];
    pill23: RawColor['pill23'];
  };

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
};
