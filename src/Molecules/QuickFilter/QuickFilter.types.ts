export type Props = {
  label: string | React.ReactNode;
  value: string;
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
