import Color from 'color';
// import accessabilityColors from "./accessabilityColors";
import defaultColors from './defaultColors';
import { RawColors, ThemeColors, ThemeColorsVersion } from './theme.types';

export const getColorLightScheme = (scheme: ThemeColorsVersion) => {
  switch (scheme) {
    // case 'a11y': return accessabilityColors;
    default:
      return defaultColors;
  }
};

export const createLightColors = (rawColor: RawColors): ThemeColors => {
  const lineColors = [
    rawColor.complementaryPink1,
    rawColor.complementaryBlue1,
    rawColor.complementaryTurquoise1,
    rawColor.complementaryGreen1,
    rawColor.brandPink,
    rawColor.complementaryGreen2,
    rawColor.complementaryBlue2,
    rawColor.complementaryPink2,
    rawColor.complementaryTurquoise2,
    rawColor.gray1,
  ];

  // prettier-ignore
  return {
    backgroundInput: rawColor.white,
    background: rawColor.gray7,
    backgroundBlack: rawColor.black,
    backgroundDark: rawColor.gray0,
    searchBackground: rawColor.gray1,
    barScaleActiveBar: rawColor.complementaryBlue1,
    barScaleInactiveBar: rawColor.gray6,
    bubbleBackground: rawColor.white,
    bubbleBorder: rawColor.gray4,
    bubbleSecondaryText: rawColor.gray2,
    tableBorder: rawColor.gray0,
    bulbBackground: rawColor.brandGreen,
    buttonSecondaryBackground: rawColor.white,
    buttonText: rawColor.white,
    buttonTextLight: rawColor.black,
    buy: rawColor.cta,
    buyActive: rawColor.ctaPressed,
    borderActive: rawColor.cta,
    card: rawColor.white,
    cta: rawColor.cta,
    disabledText: rawColor.gray3,
    disabledBackground: rawColor.gray6,
    divider: rawColor.gray6,
    emptyState: rawColor.gray4,
    fundExchange: rawColor.gray2,
    label: rawColor.gray2,
    accordionText: rawColor.gray2,
    selectOptionBackground: rawColor.white,
    marketingCardMortageHighlight: rawColor.brandTurquoise,
    menuAccent1: rawColor.brandGreen,
    menuAccent2: rawColor.brandTurquoise,
    menuAccent3: rawColor.index,
    menuAccent4: rawColor.brandPink,
    menuAccent5: rawColor.brandBlue,
    messageCentralFaqIcon: rawColor.gray5,
    messageCentralFaqButtonBorder: rawColor.gray4,
    modalBackdrop: Color(rawColor.gray2).alpha(0.63).rgb().string(),
    module: rawColor.white,
    negative: rawColor.negative,
    negativeBlackBackground: rawColor.negative,
    otherMonthDateText: rawColor.gray4,
    positive: rawColor.positive,
    sell: rawColor.negative,
    sellActive: rawColor.negativePressed,
    separator: rawColor.gray0,
    shadowCard: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowModal: Color(rawColor.black).alpha(0.16).rgb().string(),
    shadowInput: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowSwitch: Color(rawColor.black).alpha(0.05).rgb().string(),
    shareville: rawColor.complementaryGreen1,
    skeleton: rawColor.gray6,
    spinnerBlack: rawColor.black,
    spinnerWhite: rawColor.white,
    starRating: rawColor.index,
    starRatingOff: rawColor.gray6,
    streamingBolt: rawColor.index,
    svgFill: rawColor.gray0,
    svgStroke: rawColor.gray2,
    svgStokeLight: rawColor.white,
    text: rawColor.gray0,
    textLight: rawColor.white, // FIXME: to be removed later
    warning: rawColor.index,
    iconBackdropCta: Color(rawColor.cta).alpha(0.1).rgb().string(),
    inputBorder: rawColor.gray4,
    inputBorderHover: rawColor.gray1,
    tableRowBackground: rawColor.white,
    tableRowHover: rawColor.gray7,
    datePickerWithinRangeBackground: Color(rawColor.gray2).alpha(0.1).rgb().string(),
    datePickerWithinRangeFade: Color(rawColor.gray2).alpha(0.01).rgb().string(),
    flagBorder: rawColor.gray6,
    inputBorderError: rawColor.negative,
    inputBorderSuccess: rawColor.positive,
    generationSavingsTimelineColor1: rawColor.complementaryGreen1,
    generationSavingsTimelineColor2: rawColor.complementaryPink1,
    generationSavingsTimelineColor3: rawColor.brandBlue,
    generationSavingsTimelineColor4: rawColor.complementaryBlue1,
    guidanceSelectionCardIcon: rawColor.brandPink,
    orderDepthBackground: rawColor.gray6,
    orderDepthDarkBackground: rawColor.gray5,
    orderAccountLabel: rawColor.gray1,
    listItemBackgroundHover: Color(rawColor.complementaryTurquoise1).alpha(0.1).rgb().string(),
    loanRatesGraphColor2: rawColor.complementaryBlue2,
    selectionCardBorder: rawColor.gray5,
    selectionCardText: rawColor.gray2,
    sliderColor: rawColor.cta,
    sliderSecondary: rawColor.brandGreen,
    sliderDisabled: rawColor.gray6,
    sliderThumbBackground: rawColor.white,
    sliderBackgroundColor: rawColor.gray6,
    statusFulfilledBackgroundColor: rawColor.cta,
    statusFulfilledTextColor: rawColor.white,
    switchReadOnlyTrackBg: Color(rawColor.cta).alpha(0.1).rgb().string(),
    switchReadOnlyKnobBg: rawColor.gray7,
    dateAvatarBackground1: rawColor.gray6,
    dateAvatarBackground2: rawColor.gray7,
    dateAvatarText1: rawColor.gray2,
    dateAvatarText2: rawColor.gray0,
    transferPendingIconColor: rawColor.index,
    timelineActive: rawColor.cta,
    timelineSuccess: rawColor.positive,
    timelineWarning: rawColor.index,
    timelineFailure:rawColor.negative,
    timelineNext: rawColor.gray4,
    transferProgressBar1: rawColor.brandPink,
    transferProgressBar2: rawColor.positive,
    transferProgressBar3: rawColor.gray5,
    transferProgressBarText1: rawColor.gray1,
    transferProgressBarText2: rawColor.gray2,
    transferStatusBannerBackground1: Color(rawColor.complementaryBlue1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground2: Color(rawColor.complementaryPink1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground3: Color(rawColor.index).alpha(0.1).rgb().string(),
    transferStatusBannerText1: rawColor.complementaryBlue1,
    transferStatusBannerText2: rawColor.complementaryPink1,
    transferStatusBannerText3: rawColor.gray0,
    transferStatusBannerChevron: rawColor.gray0,
    onboardingAccentBlue: rawColor.brandBlue,
    onboardingAccentGreen: rawColor.brandGreen,
    onboardingAccentPink: rawColor.brandPink,
    onboardingAccentTurquoise: rawColor.brandTurquoise,
    progressBarText: rawColor.white,
    progressBarDone: rawColor.positive,
    progressBarActive: rawColor.cta,
    progressBarFailure: rawColor.negative,
    progressBarWarning: rawColor.index,
    progressBarNext: rawColor.gray4,
    indexFundsBackground: rawColor.gray6,
    indexFundsNorwegianAccent: rawColor.brandBlue,
    indexFundsFinnishAccent: [
      rawColor.brandPink,
      rawColor.brandBlue,
      rawColor.complementaryBlue2,
      rawColor.black,
      rawColor.complementaryTurquoise1,
    ],
    investmentPredictionGraphPink: rawColor.complementaryPink1,
    investmentPredictionGraphBlue: rawColor.complementaryBlue2,
    investmentPredictionGraphGreen: rawColor.complementaryGreen2,
    investmentPredictionGraphTurquoise: rawColor.complementaryTurquoise2,
    privateBankingBannerTitle: rawColor.gray6,
    privateBankingBannerText: rawColor.white,
    privateBankingBannerBackground: rawColor.gray6,
    paletteMap: [
      rawColor.complementaryBlue2,
      rawColor.complementaryBlue1,
      rawColor.brandBlue,
      rawColor.gray1,
      rawColor.gray3,
    ],
    palettePink: rawColor.palettes.pink,
    paletteGreen: rawColor.palettes.green,
    paletteBlue: rawColor.palettes.blue,
    paletteTurquoise: rawColor.palettes.turquoise,
    paletteLineGraph: [rawColor.cta, rawColor.index, ...lineColors],
    /** @deprecated  */ creditsPiePrimary: rawColor.complementaryPink1,
    /** @deprecated  */ creditsPieSecondary: rawColor.complementaryPink2,
    /** @deprecated  */ disabled: rawColor.gray3,
    /** @deprecated  */ mapColor1: rawColor.complementaryBlue2,
    /** @deprecated  */ mapColor2: rawColor.complementaryBlue1,
    /** @deprecated  */ mapColor3: rawColor.brandBlue,
    /** @deprecated  */ mapColor4: rawColor.gray1,
    /** @deprecated  */ mapColor5: rawColor.gray3,
    /** @deprecated  */ pieChartColor2: rawColor.brandPink,
  };
};
