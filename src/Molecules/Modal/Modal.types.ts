export type InnerProps = {
  className?: string;
  closeTitle?: string;
  onClose?: Function;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  hideClose?: boolean;
  /** @default false */
  closeOnBackdropClick?: boolean;
};

export type DialogProps = {
  show: boolean;
};

export type Props = {
  open?: boolean;
  /** @default false */
  autoFocus?: boolean;
} & InnerProps;
