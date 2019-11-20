export type InnerProps = {
  className?: string;
  onClose?: Function;
  title?: string;
  footer?: React.ReactNode;
  hideClose?: boolean;
};

export type DialogProps = {
  show: boolean;
};

export type Props = {
  open?: boolean;
} & InnerProps;
