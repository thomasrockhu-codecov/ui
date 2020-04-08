export type LabelAddonProp = {
  labelTooltip?: string;
  hideLabel?: boolean;
};

export type Props = {
  label?: React.ReactNode;
  hideLabel?: boolean;
  children: React.ReactNode;
  className?: string;
  error?: React.ReactNode;
  extraInfo?: React.ReactNode;
  fieldId?: string;
  /** @deprecated use fieldId */
  forId?: string;
  group?: boolean;
  ref?: React.Ref<HTMLDivElement>;
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
} & LabelAddonProp;
