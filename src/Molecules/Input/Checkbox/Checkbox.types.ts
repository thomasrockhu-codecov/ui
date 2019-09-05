export type Props = {
  label: string;
  autoFocus?: boolean;
  className?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: string;
  name?: string;
  value?: string;
  required?: boolean;
  success?: boolean;

  onChange?: React.ChangeEvent<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};
