import Color from 'color';
import accessabilityColors from './accessabilityColors';
import defaultColors from './defaultColors';
import { RawColors, ThemeColors, ThemeColorsVersion } from './theme.types';

export const getColorLightScheme = (scheme: ThemeColorsVersion) => {
  switch (scheme) {
    case 'a11y':
      return accessabilityColors;
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
    accordionText: rawColor.gray2,

    accountBadgeBackground: rawColor.black,
    accountBadgeText: rawColor.white,

    background: rawColor.gray7,
    backgroundBlack: rawColor.black,
    backgroundDark: rawColor.gray0,

    barGraphHighlight: Color(rawColor.complementaryBlue1).alpha(0.1).rgb().string(),

    barScaleActiveBar: rawColor.complementaryBlue1,
    barScaleInactiveBar: rawColor.gray6,

    borderActive: rawColor.cta,

    bubbleBackground: rawColor.white,
    bubbleBorder: rawColor.gray4,
    bubbleSecondaryText: rawColor.gray2,

    bulbBackground: rawColor.brandGreen,
    bulbForeground: rawColor.gray0,

    buttonSecondaryBackground: rawColor.white,
    buttonTextLight: rawColor.gray0,

    buttonBackgroundPrimary: rawColor.blue500,
    buttonBackgroundHoverPrimary: rawColor.blue600,
    buttonBackgroundActivePrimary: rawColor.blue700,
    buttonBackgroundDisabled: rawColor.gray200,

    buttonBorderSecondary: rawColor.blue500,
    buttonHoverSecondary: rawColor.blue600,
    buttonActiveSecondary: rawColor.blue700,

    buttonText: rawColor.white,
    buttonTextSecondary:rawColor.blue500,
    buttonTextDisabled: rawColor.gray500,

    buy: rawColor.cta,
    buyActive: rawColor.ctaPressed,
    card: rawColor.white,
    cta: rawColor.blue500,
    ctaHover: rawColor.blue600,

    dateAvatarBackground1: rawColor.gray6,
    dateAvatarBackground2: rawColor.gray7,
    dateAvatarText1: rawColor.gray2,
    dateAvatarText2: rawColor.gray0,

    datePickerWithinRangeBackground: Color(rawColor.gray2).alpha(0.1).rgb().string(),
    datePickerWithinRangeFade: Color(rawColor.gray2).alpha(0.01).rgb().string(),

    disabledBackground: rawColor.gray6,
    disabledText: rawColor.gray3,

    divider: rawColor.gray6,
    emptyState: rawColor.gray4,
    flagBorder: rawColor.gray6,
    fundExchange: rawColor.gray2,

    generationSavingsTimelineColor1: rawColor.complementaryGreen1,
    generationSavingsTimelineColor2: rawColor.complementaryPink1,
    generationSavingsTimelineColor3: rawColor.brandBlue,
    generationSavingsTimelineColor4: rawColor.complementaryBlue1,

    keyFiguresBackground: rawColor.gray100,

    graphVolume: rawColor.gray5,
    graphVolumeHover: rawColor.gray4,

    guidanceSelectionCardIcon: rawColor.brandPink,
    iconBackdropCta: Color(rawColor.cta).alpha(0.1).rgb().string(),
    icon: rawColor.gray2,

    indexFundsBackground: rawColor.gray6,
    indexFundsFinnishAccent: [
      rawColor.brandBlue,
      rawColor.complementaryBlue2,
      rawColor.black,
      rawColor.complementaryTurquoise1,
    ],
    indexFundsNorwegianAccent: rawColor.brandBlue,

    inputBackground: rawColor.white,
    inputBorder: rawColor.gray4,
    inputBorderError: rawColor.negative,
    inputBorderHover: rawColor.gray1,
    inputBorderSuccess: rawColor.positive,
    inputHover: rawColor.gray7,

    investmentPredictionGraphBlue: rawColor.complementaryBlue2,
    investmentPredictionGraphGreen: rawColor.complementaryGreen2,
    investmentPredictionGraphPink: rawColor.complementaryPink1,
    investmentPredictionGraphTurquoise: rawColor.complementaryTurquoise2,

    label: rawColor.gray2,
    lineScaleValueColor: rawColor.complementaryTurquoise1,
    listItemBackgroundHover: Color(rawColor.complementaryTurquoise1).alpha(0.1).rgb().string(),
    loanRatesGraphColor2: rawColor.complementaryBlue2,
    marketingCardMortageHighlight: rawColor.brandTurquoise,

    menuAccent1: rawColor.brandGreen,
    menuAccent2: rawColor.brandTurquoise,
    menuAccent3: rawColor.index,
    menuAccent4: rawColor.brandPink,
    menuAccent5: rawColor.brandBlue,
    menuText: rawColor.white,

    messageCentralFaqButtonBorder: rawColor.gray4,
    messageCentralFaqIcon: rawColor.gray5,

    modalBackdrop: Color(rawColor.gray2).alpha(0.63).rgb().string(),
    module: rawColor.white,

    negative: rawColor.negative,
    negativeBlackBackground: rawColor.negative,

    onboardingAccentBlue: rawColor.brandBlue,
    onboardingAccentGreen: rawColor.brandGreen,
    onboardingAccentPink: rawColor.brandPink,
    onboardingAccentTurquoise: rawColor.brandTurquoise,

    orderAccountLabel: rawColor.gray1,
    orderDepthBackground: rawColor.gray6,
    orderDepthDarkBackground: rawColor.gray5,
    orderPanelLabelColor: rawColor.gray600,

    otherMonthDateText: rawColor.gray4,

    paletteBlue: rawColor.palettes.blue,
    paletteGreen: rawColor.palettes.green,
    paletteLineGraph: [rawColor.cta, rawColor.index, ...lineColors],
    paletteMap: [
      rawColor.complementaryBlue2,
      rawColor.complementaryBlue1,
      rawColor.brandBlue,
      rawColor.gray1,
      rawColor.gray3,
    ],
    palettePink: rawColor.palettes.pink,
    paletteTurquoise: rawColor.palettes.turquoise,

    placeholderText: rawColor.gray2,

    positive: rawColor.positive,

    infoBarBackgroundSuccess: rawColor.green100,
    infoBarBackgroundWarning: rawColor.yellow100,
    infoBarBackgroundError: rawColor.red100,
    infoBarBackgroundInfo: rawColor.gray100,
    
    infoBarSuccess: rawColor.green500,
    infoBarWarning: rawColor.yellow400,
    infoBarError: rawColor.red500,
    infoBarInfo: rawColor.blue500,

    link: rawColor.blue500,

    privateBankingBannerBackground: rawColor.gray6,
    privateBankingBannerText: rawColor.white,
    privateBankingBannerTitle: rawColor.gray6,

    progressBarActive: rawColor.cta,
    progressBarDone: rawColor.positive,
    progressBarFailure: rawColor.negative,
    progressBarNext: rawColor.gray4,
    progressBarText: rawColor.white,
    progressBarWarning: rawColor.index,

    searchBackground: rawColor.gray1,
    searchText: rawColor.gray7,

    segmentedControlBackground: rawColor.gray7,

    selectionCardBorder: rawColor.gray5,
    selectionCardText: rawColor.gray2,
    selectOptionBackground: rawColor.white,

    sell: rawColor.negative,
    sellActive: rawColor.negativePressed,
    separator: rawColor.gray0,

    shadowCard: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowInput: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowModal: Color(rawColor.black).alpha(0.16).rgb().string(),
    shadowSwitch: Color(rawColor.black).alpha(0.05).rgb().string(),

    shareville: rawColor.complementaryGreen1,
    skeleton: rawColor.gray6,

    sliderBackgroundColor: rawColor.gray6,
    sliderColor: rawColor.cta,
    sliderDisabled: rawColor.gray6,
    sliderSecondary: rawColor.brandGreen,
    sliderThumbBackground: rawColor.white,

    spinnerBlack: rawColor.black,
    spinnerWhite: rawColor.white,
    starRating: rawColor.index,
    starRatingOff: rawColor.gray6,
    statusFulfilledBackgroundColor: rawColor.cta,
    statusFulfilledTextColor: rawColor.white,
    streamingBolt: rawColor.index,

    svgFill: rawColor.gray0,
    svgStokeLight: rawColor.white,
    svgStroke: rawColor.gray2,

    switchReadOnlyKnobBg: rawColor.gray7,
    switchReadOnlyTrackBg: Color(rawColor.cta).alpha(0.1).rgb().string(),

    tableBorder: rawColor.gray0,
    tableRowBackground: rawColor.white,
    tableRowHover: rawColor.gray7,

    text: rawColor.gray0,
    textLight: rawColor.white, // FIXME: to be removed later

    timelineActive: rawColor.cta,
    timelineFailure: rawColor.negative,
    timelineNext: rawColor.gray4,
    timelineSuccess: rawColor.positive,
    timelineWarning: rawColor.index,

    transferPendingIconColor: rawColor.index,
    transferProgressBar1: rawColor.brandPink,
    transferProgressBar2: rawColor.positive,
    transferProgressBar3: rawColor.gray5,
    transferProgressBarText1: rawColor.gray1,
    transferProgressBarText2: rawColor.gray2,
    transferStatusBannerBackground1: Color(rawColor.complementaryBlue1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground2: Color(rawColor.complementaryPink1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground3: Color(rawColor.index).alpha(0.1).rgb().string(),
    transferStatusBannerChevron: rawColor.gray0,
    transferStatusBannerText1: rawColor.complementaryBlue1,
    transferStatusBannerText2: rawColor.complementaryPink1,
    transferStatusBannerText3: rawColor.gray0,

    sfdrArticle6: rawColor.gray3,
    sfdrArticle8: rawColor.sfdrArticle8,
    sfdrArticle9: rawColor.sfdrArticle9,

    joinSharevilleIllustration: rawColor.green600,
    joinSharevilleBadge: rawColor.green200,
    joinSharevilleBanner: rawColor.green100,

    warning: rawColor.index,
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
