import { Theme } from '../../theme/theme.types';

export type Props = {
  className?: string;
  /** Label should always be presented - A11y */
  label: string;
  /** But you can hide it visually */
  hideLabel?: boolean;
  error?: string;
  success?: boolean;
  /** TODO: is this needed? */
  extraInfo?: string;
  rightAddon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  size?: 's';

  noBottomMargin?: boolean;

  value?: string;
  defaultValue?: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};

export type PropsWithTheme = Props & { theme: Theme };
