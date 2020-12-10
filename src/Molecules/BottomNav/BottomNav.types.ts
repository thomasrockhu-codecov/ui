export type Props = {
  onCancel: React.MouseEventHandler;
  onPrev: React.MouseEventHandler;
  onForward: React.MouseEventHandler;
  onSubmit?: React.MouseEventHandler;
  /** Switches forward button to submit */
  isLastStep?: boolean;
  isLoading?: boolean;
  isEmbedded?: boolean;
  titleText?: string;
  cancelText: string;
  previousText: string;
  nextText: string;
  submitText: string;
};
