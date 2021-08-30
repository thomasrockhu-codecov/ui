export type Props = {
  /** Needs to be between 0 and max  */
  value: number;

  /** The number of bars to render */
  /** @default 7 */
  max?: number;

  /** X axis label */
  /** @default null */
  axisLabel?: React.ReactNode;
};

export type BarProps = {
  isActive: boolean;
};
