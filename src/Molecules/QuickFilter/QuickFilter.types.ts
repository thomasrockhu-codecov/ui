import { VARIANT } from './constants';

export type Variant = typeof VARIANT.SMALL | typeof VARIANT.BIG;

export type Props = {
  value: string;

  /** @default '' */
  label?: string | React.ReactNode;
  /** @default VARIANT.SMALL */
  variant?: Variant;
  /** @default undefined */
  onChange?: (value: any) => void;
  /** @default null */
  icon?: React.ReactNode;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  selected?: boolean;
  /** @default false */
  selectedInitially?: boolean;
};
