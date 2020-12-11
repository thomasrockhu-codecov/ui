export type Props = {
  onCancel: React.MouseEventHandler;
  onPrevious: React.MouseEventHandler;
  onNext: React.MouseEventHandler;
  onSubmit?: React.MouseEventHandler;
  /** ^ Switches forward button to submit */
  hidePreviousButton?: boolean;
  isLastStep?: boolean;
  isLoading?: boolean;
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
