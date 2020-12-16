export type Props = {
  onCancel: React.MouseEventHandler;
  onPrevious: React.MouseEventHandler;
  onNext: React.MouseEventHandler;
  onSubmit?: React.MouseEventHandler;
  /** @default false */
  hidePreviousButton?: boolean | null;
  /** @default false */
  isLastStep?: boolean;
  /** @default false */
  isLoading?: boolean;
  /** @default false */
  isEmbedded?: boolean;
  titleText?: string;
  cancelText: string;
  previousText: string;
  nextText: string;
  submitText: string;
  cancelButtonLink?: string;
  previousButtonLink?: string;
  submitButtonLink?: string;
  nextButtonLink?: string;
};
