export type Props = {
  className?: string;
  onClose?: Function;
  title?: React.ReactNode;
  open?: boolean;
  ref?: React.Ref<HTMLDivElement>;
};

export type TitleProps = {
  title: React.ReactNode;
  uid: string;
};
