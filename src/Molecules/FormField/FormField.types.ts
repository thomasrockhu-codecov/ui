export type Props = {
  label?: string;
  hideLabel?: boolean;

  className?: string;
  error?: string;
  extraInfo?: string;
  fieldId?: string;
  /** @deprecated use fieldId */
  forId?: string;
  group?: boolean;
  required?: boolean;
  /** @deprecated use required */
  showRequired?: boolean;

  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
};
