import { InjectedIntlProps, InjectedIntl } from 'react-intl';

export type Props = {
  /** Label should always be presented - A11y */
  label: string;
  /** But you can hide it visually */
  hideLabel?: boolean;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: string;
  extraInfo?: string;
  fieldId: string;
  fullWidth?: boolean;
  /**
   * none
     No virtual keyboard;
     this is useful when the application or site
     implements its own keyboard input control.
   * decimal
      Fractional numeric input keyboard containing the digits
      and the appropriate separator character for the user's
      locale (typically either "." or ",").
      Devices may or may not show a minus key.
    numeric
      Numeric input keyboard; all that is needed are the digits 0 through 9.
      Devices may or may not show a minus key.
   */
  inputMode?: 'none' | 'numeric' | 'decimal';
  max?: string | number;
  min?: string | number;
  name?: string;
  noSteppers?: boolean;
  required?: boolean;
  size?: 's';
  step?: string | number;
  success?: boolean;
  value?: string | number;
  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;

  onStepUp?: () => void;
  onStepDown?: () => void;
  onChange?: (value: string) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};

export type NumberComponent = React.FunctionComponent<Props & InjectedIntlProps>;

export type adjustValueProps = {
  step: number;
  min?: number;
  max?: number;
  shouldIncrement: boolean;
  originalValue: number;
  intl: InjectedIntl;
};
