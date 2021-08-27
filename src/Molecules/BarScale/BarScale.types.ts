export type Props = {
  /** Needs to be between 0 and max  */
  value: number;

  /** The number of bars to render */
  /** @default 7 */
  max?: number;

  /** show the number of the active bar */
  /** @default false */
  showValue: boolean;

  /** the text in the indicator */
  indicatorText: string;

  /** X axis label */
  /** @default null */
  axisLabel?: React.ReactNode;
};

export type BarProps = {
  isActive: boolean;
};
