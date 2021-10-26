export type PillButtonProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary';
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  /** @default true */
  delayLoadingSpinnerAnimation?: boolean;
  disabled?: boolean;
  form?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  /** @default left */
  iconPlacement?: 'left' | 'right';
  id?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  ref?: React.Ref<HTMLButtonElement>;
} & Pick<React.DOMAttributes<HTMLButtonElement>, 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver'>;

export type InnerProps = Omit<PillButtonProps, 'variant' | 'fullWidth'> & {
  $variant?: PillButtonProps['variant'];
  $fullWidth?: PillButtonProps['fullWidth'];
  $loading?: PillButtonProps['loading'];
};
