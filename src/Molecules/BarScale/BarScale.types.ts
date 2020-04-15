export type Props = {
  /** Needs to be between 0 and max  */
  value: number;
  /** The number of bars to render */
  max: number;
  /** show the number of the active bar */
  showValue: boolean;
  /** the text in the indicator */
  indicatorText: string;
  /** X axis label */
  axisLabel: React.ReactNode;
};
