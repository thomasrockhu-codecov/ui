export type PillButtonProps = {
  /** @default primary */
  variant?: 'primary' | 'secondary';
  children: React.ReactChild | React.ReactChild[];
  className?: string;
  delayLoadingSpinnerAnimation?: boolean;
  disabled?: boolean;
  form?: string;
  /** @default false */
  fullServerRedirect?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  /** @default left */
  iconPlacement?: 'left' | 'right';
  id?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** @default true */
  ref?: React.Ref<HTMLButtonElement>;
} & Pick<React.DOMAttributes<HTMLButtonElement>, 'onMouseEnter' | 'onMouseLeave' | 'onMouseOver'>;

export type InnerProps = Omit<PillButtonProps, 'variant' | 'fullWidth'> & {
  $variant?: PillButtonProps['variant'];
  $fullWidth?: PillButtonProps['fullWidth'];
};
