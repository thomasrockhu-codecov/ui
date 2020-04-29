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

export type IndicatorProps = {
  value: number;
  leftCollision: boolean;
  rightCollision: boolean;
};

export type LineProps = {
  value: number;
  leftCollision: boolean;
  rightCollision: boolean;
};

export type CheckCollision = (a: HTMLElement, b: HTMLElement) => boolean;
